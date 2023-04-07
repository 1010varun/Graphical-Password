const express = require("express");
const app = express();
const { urlencoded } = require("express");
const cors = require("cors");
const fetch  = require("node-fetch");
const {createApi}  = require("unsplash-js");
require("dotenv").config();

global.fetch = fetch;

app.use(urlencoded({ extended: false }));
app.use(express.json());

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.get("/", function (req, res) {
  res.send("welcome to node server");
});

const unsplash = createApi({ accessKey: process.env.ACCESS_KEY });


app.post("/signup", (req, res) => {
  const { email, theme } = req.body;
  console.log(email, theme);
    if ({ email }) {
        photo(theme);
        res.send("email recieved");
  } else {
        res.send("error");
  }
});


const photo = async (theme) => {
  const photos = await unsplash.search.getPhotos({ query: theme });
  console.log(photos.response.results.length);
};


app.listen(process.env.PORT, (err) => {
  if (process.env.PORT) {
    console.log("app is listening to port " + process.env.PORT);
  } else {
    console.log(err);
  }
});
