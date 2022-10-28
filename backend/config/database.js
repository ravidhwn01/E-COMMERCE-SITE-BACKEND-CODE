const mongoose = require("mongoose")

const connectDatabase = () => {
mongoose.connect(process.env.DB_URL)
.then((data)=>{
    console.log(`database connected with server: ${data.connection.host}`)
}).catch((e)=>{
    console.log(e)
})
}
module.exports = connectDatabase
