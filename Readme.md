copied project SBA318 and renameed it SBA318PAY
no pushing to git hub, 
converting data to json
and trying to use real data here

safely reuse your project folder for a second project:

📂 Step 1: Copy Your Project Folder

Right-click your project folder → Copy → Paste (rename it, e.g., Project2).
⚠️ Step 2: Delete These Before Starting

node_modules folder → Too big, may cause conflicts.
.env file (if any) → Contains secrets from Project 1.
.git folder (if using Git) → So you start fresh.
📝 Step 3: Update package.json

Open the file and change:
json
Copy
"name": "project2",  // Rename this!

saved real json in data folder
import it to db.js

Sync vs. Async
Use require() for static data (loaded once at startup).
Use fs.readFile() if the JSON changes frequently:

converted CSV to JSON at https://www.convertcsv.com/csv-to-json.htm

saved file in data folder

I had small problem convertig these data becaue my mac would only allow me to open CSV file in Numbers app, and when i converted it it had some little snippet like: "[": "PK�����", maybe: means something went really wrong with the file — it looks like your JSON file might have accidentally been overwritten or corrupted with binary data, possibly from a .zip or .docx file.
they way it solved, as soon downloaded, it converted with out opening it, then saved json to data folder.

now to use these json data , i will need to set up routs:


I added some routes, for now posts.js is my trips route js

then to display data will do in home ejs

here is my project structure , added trips.js trips.ejs and some updates on styles.css and app.js

SBA318PAY/
├── data/
│   ├── db.js
│   ├── Trips-3.json          
│
├── middleware/
│   ├── checkUser.js
│   ├── logger.js
│
├── node_modules/
│
├── public/
│   └── styles.css            
├── routes/
│   ├── comments.js
│   ├── posts.js
│   ├── users.js
│   └── trips.js              
│
├── views/
│   ├── commentDetails/
│   ├── home.ejs
│   ├── userDetails.ejs
│   └── trips.ejs            
│
├── .gitignore
├── app.js                   
├── package-lock.json
└── package.json


The issue is that your /trips route is sending JSON data instead of rendering the trips.ejs template. Here's why you're not seeing the HTML table 

i copied trips2.json and added to trips3.json
now:  Load the Data in app.js
Pass It to a New View
views/gas.ejs
# SBA318-2-
