import express from "express"; //import Express and allows us to use it inside our server.js file.
import mongoose from "mongoose";
import cors from "cors";
import LinkModel from "./models/PasteLink.js";
import FavModel from "./models/Fav.js";
const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000; // It will set the Express server on which port it will run on.
const dburl =
  "mongodb+srv://justin:justinbro@cluster0.9f9un.mongodb.net/wordCount?retryWrites=true&w=majority";
const connectionParams = {
  useNewUrlParser: true,
};

//mongodb connection
mongoose
  .connect(dburl, connectionParams)
  .then(() => {
    console.log("connected");
  })
  .catch((e) => {
    console.log("error:", e);
  });

//insert link address to db
app.post("/insert", async (req, res) => {
  const linkaddress = req.body.linkaddress;
  const link = new LinkModel({ linkaddress: linkaddress });
  try {
    await link.save();
    res.send("inserted");
  } catch (error) {
    console.log(error);
  }
});
// //insert fav address to db
// app.post("/fav", async (req, res) => {
//   const favURL = req.body.favURL;
//   const fav = new FavModel({ favURL: favURL }); 
//   try {
//     await fav.save();
//     res.send("inserted"); 
//   } catch (error) {
//     console.log(error);
//   }
// });

//read link addresss
app.get("/read", async (req, res) => {
  LinkModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

//delete url from db
app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  await LinkModel.findByIdAndRemove(id).exec();
  res.send("deleted");
});
app.get("/copy", async (req, res) => {
  res.send("ok");
});

app.listen(5000, () => console.log(`server is running in ${port}`)); //will display a message on the console that the server is working as expected.
