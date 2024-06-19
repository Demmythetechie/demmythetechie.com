import e from "express";
import { mongoose } from "mongoose";
import projects from "../database/workSchema.js";
import url from "../database/dbInfo.js";
const workRoutes = e.Router();

workRoutes.get('/', (req, res) => {
    (async () => {
        try {
            await mongoose.connect(url);
            console.log(await projects.find());
            res.send(await projects.find({}));
        } catch (err) {
            console.log(err);
        }
    })()
});

export default workRoutes;