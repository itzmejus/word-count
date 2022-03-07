import mongoose from "mongoose";
const LinkSchema = new mongoose.Schema({
  linkaddress: {
    type: String,
    required: true,
  },
});

const LinkModel = mongoose.model("pasteurl", LinkSchema);
export default LinkModel;
