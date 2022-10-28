const app = require("./app");
const dotenv  =  require("dotenv");
const connectDatabase = require("./config/database");
//config
dotenv.config({ path: "backend/config/config.env" });

// connecting database
connectDatabase();
// app.listen(port, () => console.log(`server is workingon http://localhost: ${port}`));
app.listen(process.env.PORT, ()=>{
        console.log(`server is working on http://localhost:${process.env.PORT}`);
})