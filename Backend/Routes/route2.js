import express from "express";
import login from "../Models/Login.js";
import { getUser, setUser } from "../Service/SessionId.js";
import { v4 as uuidv4 } from "uuid";




const route2 = express.Router();

route2
  .get("/", (req, res) => {
    res.redirect("http://localhost:5173/login");
  })
  .post("/", async (req, res) => {
    const data = req.body;
    let checkdata = null;
    try {
      checkdata = await login.findOne({
        Email: data.Email,
        Password: data.Password,
      });
      if (checkdata) {
        const sessioId = uuidv4();
        setUser(sessioId, checkdata);
        
        res.status(201).send({ status: "Authorized User", redirect: true,uid : sessioId });
      } else
        res.status(401).send({ status: "Unauthorized User", redirect: false });
    } catch (error) {
      console.log(error);
      res.send(404).send({ status: "Client side Error" });
    }
  });

export default route2;
