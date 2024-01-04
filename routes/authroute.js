import express from "express";
import { checkanswercontroller, createcontroller, gethint, getquestions} from "./../controllers/authcontroller.js";


//router object
const router = express.Router();

//create questions in database
router.post('/create', createcontroller);

router.get('/getquestion/:id',getquestions);

router.get('/gethint/:date/:value',gethint);

router.post('/check-answer/:id',checkanswercontroller);

export default router;