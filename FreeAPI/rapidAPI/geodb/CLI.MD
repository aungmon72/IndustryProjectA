<!-- 
//  Lab 1| Setting up an Express App

//  Lab 1, Step 1| Create a Node app
//      npm init -y
//  Step 2| Install Express
//      npm install require
//      npm install express cors
//      npm install bcrypt
/       npm install jsonwebtoken
//      npm install mongodb

//  Step 3| Create an index.js

//  Step 5| Install nodemon
//      npm install -g nodemon
//  Step 6| Run the Express App
//      nodemon index.js -->

//  npm i --save-dev @types/geojson-geometries-lookup



lsof -i -P -n | grep LISTEN
PORT_NUMBER = 3000
lsof -i tcp:${PORT_NUMBER} | awk 'NR!=1 {print $2}' | xargs kill
PORT_NUMBER = 3000
lsof -i tcp:${PORT_NUMBER} | awk 'NR!=1 {print $2}' | xargs kill
lsof -i -P -n | grep LISTEN
