import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: false,
  },
  company: {
    type: String,
    required: false,
  },
  subject: {
    type: String,
    required: false,
  },
  message: {
    type: String,
    required: true,
  },
  ip: {
    type: String,
    required: true,
  },
  reality: {
    type: String,
    required: false,
  },
});

const Messages =
  mongoose.models?.Messages || mongoose.model("Messages", messageSchema);

export default Messages;
