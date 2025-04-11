in Terminal:

 mkdir SBA318 
 cd SBA318
 npm init -y
git init

npm install express ejs fs-extra
npm install --save-dev nodemon

echo "node_modules/" >> .gitignore
echo ".env" >> .gitignore
echo "data/" >> .gitignore

-----------------

Projecy structure:  

mkdir public views routes middleware data

touch public/styles.css
touch views/home.ejs
touch routes/users.js routes/posts.js routes/comments.js
touch middleware/logger.js middleware/checkUser.js
touch data/db.js
touch app.js README.md

-----------
Created new repo SBA318-2

git remote add origin https://github.com/JoanneOs/SBA318-2.git



