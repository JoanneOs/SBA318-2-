const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();

// Load data
const tripsData = require('./data/Trips-3.json');
const gasData = require('./data/gas.json');

// Set view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Helpers
const helpers = {
  parseCurrency: (amount) => {
    if (typeof amount === 'number') return amount;
    if (!amount) return 0;
    return parseFloat(amount.toString().replace(/[^0-9.-]/g, '')) || 0;
  },
  formatCurrency: (amount) => {
    const num = helpers.parseCurrency(amount);
    return num.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  },
  formatDate: (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return isNaN(date) ? dateString : date.toLocaleDateString();
  }
};

// Data processing functions
function getDriverData(driverName) {
  const normalizedDriverName = driverName.toLowerCase().trim();

  // Get driver's trips
  const trips = tripsData.filter(trip => {
    const tripDriver = trip['Driver Name']?.toLowerCase().trim() || '';
    return tripDriver === normalizedDriverName;
  });

  // Get gas expenses
  const gasExpenses = gasData.filter(gas => {
    const gasDriver = gas['Driver Name']?.toLowerCase().trim() || '';
    return gasDriver === normalizedDriverName;
  });

  return { trips, gasExpenses };
}

function calculatePay(trips, gasExpenses, payType) {
  const totalTripPay = trips.reduce((sum, trip) => {
    return sum + helpers.parseCurrency(trip['Estimated Cost']);
  }, 0);

  const totalGasSpend = gasExpenses.reduce((sum, gas) => {
    return sum + helpers.parseCurrency(gas['Amount']);
  }, 0);

  let finalPay = 0;
  if (payType === 'companyDriver') {
    finalPay = Math.max(0, (totalTripPay - totalGasSpend) / 2);
  } else if (payType === 'truckOwnerDriver') {
    finalPay = totalTripPay;
  }

  return { totalTripPay, totalGasSpend, finalPay };
}

// Routes
app.get('/', (req, res) => {
  const drivers = [
    { name: 'Sophia', type: 'companyDriver' },
    { name: 'Marcus', type: 'truckOwnerDriver' }
  ];
  
  res.render('home', {
    drivers,
    results: null,
    helpers
  });
});

app.post('/calculate-pay', (req, res) => {
  try {
    const { driverName, payType } = req.body;
    const drivers = [
      { name: 'Sophia', type: 'companyDriver' },
      { name: 'Marcus', type: 'truckOwnerDriver' }
    ];
    
    const { trips, gasExpenses } = getDriverData(driverName);
    const { totalTripPay, totalGasSpend, finalPay } = calculatePay(trips, gasExpenses, payType);

    res.render('home', {
      drivers,
      results: {
        driverName,
        payType,
        trips,
        gasExpenses,
        totalTripPay,
        totalGasSpend,
        finalPay
      },
      helpers
    });
  } catch (err) {
    console.error('Calculation error:', err);
    res.status(500).render('error', { 
      message: 'Error calculating pay',
      helpers
    });
  }
});

// View routes
app.get('/trips', (req, res) => {
  res.render('trips', { 
    trips: tripsData,
    helpers 
  });
});

app.get('/gas', (req, res) => {
  res.render('gas', { 
    gasExpenses: gasData,
    helpers 
  });
});

// Error handling
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).render('error', { 
    message: 'Internal Server Error',
    helpers
  });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});