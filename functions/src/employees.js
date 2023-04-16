import { db } from "./dbConnect.js";
import {FeildValue} from "firebase-admin/firestore";

const coll = db.collection("employees");

export async function addEmployee(req, res) {
  const newEmployee = req.body;
  newEmployee.createdAt= FeildValue.serverTimeStamp(); 
  await db.collection("employees").add(newEmployee);
  await coll.add(newEmployee);
  res.status(201).send({ message: "Employee " });
}

// CRUD GET ALL
export async function getAllEmployees(req, res) {
  const collection = await coll.get();
  const employee = collection.docs.map((doc) => ({ ...doc.data }));
  res.status(202).send(employee);
}

// CRUD DELETE
export async function deleteEmployee(req, res) {
  const { id } = req.params;
  //const id = req.params.id
  await coll.doc(id).delete();
  res.status(201).send("Employee has been deleted.");
}

//CRUD UPDATE
export async function deleteEmploymee(req, res) {
  const { id } = req.params;

  const updateInfo = req.body;
  await coll.doc(id).update(updateInfo);
  res.status(202).send("Employee has been updated.");
}
