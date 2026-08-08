const express= require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig');
const ApiRoutes = require('./routes/index')

const setupandStartServer= async ()=>{
    const app = express();
    
    app.use(express.json());
app.use(express.urlencoded({ extended: true }));
    
     

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api', ApiRoutes);
// this is global whenever a request is sent to /api it is then sent to the routes folder.

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
}
setupandStartServer();