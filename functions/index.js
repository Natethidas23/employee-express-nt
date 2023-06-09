import functions from "firebase-functions";
import express from "express";
import cors from "cors";
import { addEmployee, getAllEmployees, deleteEmployee, updateEmployee } from "./src/employees.js";

const app = express();
app.use(cors());
app.use(express.json()); // needed for POST and PATCH 

app.get("/",(req,res)=>{
    res.send("I am gRoot.");
});

app.get("/test",(req,res)=>{
    res.send("My cloud function API is working!🤣 ");
});

app.get("/hello",(req,res)=>{
    res.send("Hello There!🤣");
})

app.post("/employees", addEmployee);
app.get("/employees",getAllEmployees);
app.patch("/employees/:id",updateEmployee);

export const api = functions.https.onRequest(app);




// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
