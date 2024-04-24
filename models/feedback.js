import mongoose, { Schema } from "mongoose";

const feedbackSchema = new Schema(
  {
    username: String,
    content: String,
    ratingStar: Number,
  },
  {
    timestamps: true,
  }
);

const Feedback =
  mongoose.models.Feedback || mongoose.model("Feedback", feedbackSchema);

export default Feedback;
