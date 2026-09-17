// var fs=require('fs');
// var os=require('os'); 
// var  user=os.userInfo();
// console.log(user)
// ..........................
// const jsonString='{"name":"munu","Age":19,"city":"udala"}';
// const jsonObject=JSON.parse(jsonString);
// console.log(jsonObject)

// const object={
//     name:"badol",
//     age:19,
//     city:"anugul",
// }
// const json=JSON.stringify(object);
// console.log(json);
// ................................................(to create a server)


import express from 'express'
import db from './db.js';
import person from './models/person.js';
import MenuItem from './models/MenuItem.js';
import bodyParser from 'body-parser';
import routre from './routes/personRoutes.js';
import router from './routes/menuRoutes.js';



const app = express();
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('well come me server')
})

app.get('/munu', (req, res) => {
  res.send("WELLCOME TO ME RESTURAND")
})

app.post('/items', (req, res) => {
  res.send("item is already available")
})

app.use('/menu',router);

app.use('/person',routre);



app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})