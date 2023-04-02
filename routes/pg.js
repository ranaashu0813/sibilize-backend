import Express  from "express";
import { getPost ,getPostid} from "../controller/pgData.js";



const router=Express.Router();

router.get("/",getPost);
router.get("/:id",getPostid);



export default router;