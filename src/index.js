const express= require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig');

const setupandStartServer= async ()=>{
    const app = express();
     

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));



app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
}
setupandStartServer();