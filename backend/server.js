const { app } = require("./app");
const { connectDatabase } = require("./db/database");

//Handling uncaught Exception
process.on("uncaughtException", (err) => {
  console.log("Error: ", err.message);
  console.log("Shutting down server for handling uncaught exception");
});

//config
if (process.env.NODE_ENV != "PRODUCTION") {
  require("dotenv").config({
    path: "backend/congif/.env",
  });
}

//create server
const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

//connect DB
connectDatabase()


//unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log("Error: ", err.message);
  console.log("Shutting down server for handling promise rejection");

  server.close(() => {
    process.exit(1);
  });
});
