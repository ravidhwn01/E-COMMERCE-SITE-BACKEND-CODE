const mongoose = require("mongoose")
// connecting mongoose
const connectDatabase = () => {
mongoose.connect(process.env.DB_URL)
.then((data)=>{
    console.log(`database connected with server: ${data.connection.host}`)
})
// .catch((err)=>{
//     console.log(err)
// })
}
module.exports = connectDatabase
