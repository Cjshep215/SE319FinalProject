var express = require("express");
var cors = require("cors");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");

const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const dbName = "SE319FinalProject";
const client = new MongoClient(url);
const db = client.db(dbName);

app.use(cors());
app.use(bodyParser.json());

const port = "8081";
const host = "localhost";

app.get("/listTrucks", async (req, res) => {
  await client.connect();
  console.log("Node connected successfully to GET MongoDB");
  const query = {};
  const results = await db
    .collection("trucks")
    .find(query)
    .limit(100)
    .toArray();
  console.log(results);
  res.status(200);
  res.send(results);
});

app.get("/:id", async (req, res) => {
  console.log(req.params);
  const truckid = req.params.id;
  console.log("Truck to find: ", truckid);

  await client.connect();
  console.log("Node connected successfully to GET-id MongoDB");
  const query = { truckID: truckid };

  const results = await db.collection("trucks").findOne(query);

  console.log("Results: ", results);
  if (!results) res.send("Not Found").status(404);
  else res.send(results).status(200);
});

app.post("/addTruck", async (req, res) => {
  try {
    await client.connect();
    const keys = Object.keys(req.body);
    const values = Object.values(req.body);

    const newDocument = {
      truckName: req.body.truckNname,
      truckId: Number(req.body.truckId),
      truckHours: Array(req.body.truckHours),
      imageUrl: req.body.imageUrl,
      logoUrl: req.body.logoUrl,
      otherImages: Array(req.body.otherImages),
      menu: Array(req.body.menu),
      locationTags: Array(req.body.locationTags),
      filterTags: Array(req.body.filterTags),
      otherInfo: Array(req.body.otherInfo),
      rating: {
        rate: req.body.ratingRate,
        count: req.body.ratingCount,
      },
      commentsArray: Array(req.body.commentsArray),
    };

    console.log(newDocument);

    const results = await db
      .collection("trucks")
      .insertOne(newDocument);
    res.status(200);
    res.send(results);
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).send({ error: "An internal server error occurred" });
  }
});

app.delete("/deleteTruck/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    await client.connect();
    console.log("Truck to delete :", id);
    const query = { truckID: id };

    const truckDeleted = await db
      .collection("trucks")
      .findOne(query);

    // delete
    const results = await db.collection("trucks").deleteOne(query);
    res.status(200);
    // res.send(results);
    res.send(truckDeleted);
  } catch (error) {
    console.error("Error deleting truck:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

app.put("/updateTruck/:id", async (req, res) => {
  const truckid = req.params.id;
  const query = { truckID: truckid };

  await client.connect();
  console.log("Truck to Update :", truckid);

  // Data for updating the document, typically comes from the request body
  console.log(req.body);

  const updateData = {
    $set: {
      // rating: {
      //   rate: req.body.ratingRate,
      //   count: req.body.ratingCount
      // },
      commentsArray: req.body.commentsArray,
    },
  };

  // Add options if needed, for example { upsert: true } to create a document if it doesn't exist
  const options = {};
  const results = await db
    .collection("trucks")
    .updateOne(query, updateData, options);
  
  if (results.matchedCount == 0){
    return res.status(404).send({ message: 'Truck not found' });
  }
  res.status(200);
  res.send(results);
});

app.listen(port, () => {
  console.log("App listening at http://%s:%s", host, port);
});
