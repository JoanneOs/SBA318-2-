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

git add .
git commit -m "my 3rd SBA practice"
git branch -M main
git push -u origin main

******************************************

created app.js  going there and explaing my steps in there

for each step will do:
git add . && git commit -m "my work" && git push origin main

Step 1: Create a basic Express app
Step 2: Tell it to listen for incoming requests
runing: 
npx nodemon app.js
checking: http://localhost:3000 (see anything yet, but the server is alive!)
3-Add a route so the browser sees something
refreshed the browser — boom! i see my message.


Step 4: Use EJS to render a proper HTML page
html in home.ejs


5- style.css
Step 6: Parse JSON and form data
Step 7: Use middleware
8- routes

Step 9: Catch errors