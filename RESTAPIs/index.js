//http://localhost:5000/api/notes/ - check the activity 

//Required Modules
const express =  require("express")
const noteRouter  = require('./Routes/notesRoute')
const DBconnection = require('./DBconnection')
//require cors
const cors = require('cors')

//Server app
const app = express();

//Enviorment
require('dotenv').config()
const PORT = process.env.PORT

 //Middleware to Express
app.use(express.json())
app.use(express.urlencoded({extended:false}))
//middle way of cors
app.use(cors())

// //Database connect to the Atles - this code seprate in DBconnection.js file.
// mongoose
//   .connect(MONGODB_URL)
//   .then(() => console.log("Connection Successful"))
//   .catch((error) => console.error("Connection Error:", error));

//**Database Connection Call here**//
 DBconnection()

 //Routing Middleware
app.use('/api/notes', noteRouter)
//app.use('/api/users', userRouter)


//Home Route
app.get('/', (req, res)=>{
    res.send({message : "Express Server Reply"})
})


//Server the Application
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})
