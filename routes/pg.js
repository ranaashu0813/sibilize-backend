import Express  from "express";
import { getPost ,getPostid, postData,postData2} from "../controller/pgData.js";



const router=Express.Router();

router.get("/",getPost);
router.get("/:id",getPostid);
router.post("/scheduleform",postData);
router.post("/reserveform",postData2);




export default router;