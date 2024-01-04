import questionmodel from "../models/questionmodel.js";

//to create question in database
export const createcontroller=async(req,res)=>{

    try{
      const { onDate, answer, player1,player2,player3,player4,lastclub,country,surprisehint}=req.body;
  
    //save
    const question = await new questionmodel({
      onDate, answer, player1,player2,player3,player4,last_club:lastclub,country,surprise_hint:surprisehint,
    }).save();

    res.status(201).send({
      success: true,
      message: "Question Registered Successfully",
      question,
    });
  } 
  catch(error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registration",
      error,
    });
  }
}

//to fetch question from database on the basis of date
export const getquestions=async(req,res)=>{
    try {
        const params=req.params.id;
        const questionbydate=await questionmodel.findOne({onDate:params});
        res.status(201).send({
            success: true,
            message: "Question got Successfully",
            question:{
              date:questionbydate.onDate,
              player1:questionbydate.player1,
              player2:questionbydate.player2,
              player3:questionbydate.player3,
              player4:questionbydate.player4,
            }
          });
    } 
    catch (error) {
        res.status(500).send({
            success: false,
            message: "Error while getting question",
            error,
          });
    }
}

//to fetch hint on basis on date
export const gethint=async(req,res)=>{
  try {
      const {date,value}=req.params;
      const hint=await questionmodel.findOne({onDate:date}).select(`${value}`);
      res.status(201).send({
          success: true,
          message: "Hint got Successfully",
          hint
        });
  } 
  catch (error) {
      res.status(500).send({
          success: false,
          message: "Error while getting question",
          error,
        });
  }
}

//to check the answer
export const checkanswercontroller=async(req,res)=>{
  try {
    const {answer}=req.body;
    const params=req.params.id;
    
    const correctanswer=await questionmodel.findOne({onDate:params}).select("answer");
    if(correctanswer.answer===answer){
      res.status(200).send({
        success: true,
        message: "Correct Answer",
        answer,
        correctanswer
      });
    }
      else{
        res.status(201).send({
          success: false,
          message: "Wrong Answer",
          answer,
          correctanswer
        });
      }
    }
    
 catch (error) {
    res.status(500).send({
      success:false,
      message: "Error while checking answer",
      error,
    })
  }
}