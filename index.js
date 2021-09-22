import express from 'express'
/*---------------Added by Pushpak----------------*/ 
import bodyParser from 'body-parser'
import dbConfig from './config/dbconfig.js'
import mongoose from 'mongoose'
/*---------------Added by Pushpak----------------*/ 
import expressConfig from './config/expressConfig.js'
import dbImportService from './services/dbImportService.js'
import router from './routes/router.js'
//import data from './data/todoData.js'


const app = express()

/*---------------Added by Pushpak----------------*/ 
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())



mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig, {
   useNewUrlParser: true
}).then(() => {
   console.log("Successfully connected to the express-mongo-app database");
}).catch(err => {
   console.log('Could not connect to the database. Exiting now...', err);
   process.exit();
});

// bulk import data
console.log('Call import data');
dbImportService.importTopicData;
console.log('data import successful');

/*---------------Added by Pushpak----------------*/ 

const PORT = process.env.PORT || 8080
expressConfig(app)
router(app)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})