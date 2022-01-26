import "reflect-metadata";
import {createConnection} from "typeorm";
import express, { Application } from "express";
import morgan from "morgan";
// import swaggerUi from "swagger-ui-express";
import dotenv from 'dotenv';

dotenv.config();

import Router from "./routes";
import dbConfig from './config/database'

const PORT:Number = parseInt(process.env.SERVER_PORT as string, 10);

const app: Application = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));

// app.use(
//   "/docs",
//   swaggerUi.serve,
//   swaggerUi.setup(undefined, {
//     swaggerOptions: {
//       url: "/swagger.json",
//     },
//   })
// );

app.use(Router);

createConnection(dbConfig).then(_connection => {
  if(_connection.isConnected){
    console.log("Database connected");
  }
  app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
  });
}).catch(err => {
  console.log("Unable to connect to db", err);
  process.exit(1)
})

