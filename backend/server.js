const app = require("./app");
const dotenv  =  require("dotenv");
const connectDatabase = require("./config/database");
//config
dotenv.config({ path: "backend/config/config.env" });

// connecting database
connectDatabase();
// app.listen(port, () => console.log(`server is workingon http://localhost: ${port}`));
 const server = app.listen(process.env.PORT, ()=>{
        console.log(`server is working on http://localhost:${process.env.PORT}`);
})

console.log(youtube) // handle krna hai isko next lecture me

//unhandled promise rejection
process.on("unhandledRejection", (err) => {
        console.log(`ERROR: ${err.message}`);
        console.log("Shutting down the server due to unhandled promise rejection");
        server.close(() => {
                process.exit(1);
        })
        })