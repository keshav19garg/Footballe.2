import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    onDate:{
      type: String,
      required:true,
    },
  
    answer:{
      type: String,
      required: true,
    },
    player1:{
      type: String,
      required: true,
    },
    player2:{
      type: String,
      required: true,
    },
    player3:{
      type: String,
      required: true,
    },
    player4:{
      type: String,
      required: true,
    },
    last_club: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    surprise_hint: {
      type: {},
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("questions", questionSchema);
