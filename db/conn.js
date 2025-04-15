// const mongoose = require('mongoose');

// mongoose.connect("mongodb+srv://<danishkhan705010>:<1S3rnh1jeaHNMS5W>@cluster0.mongodb.net/the-awaz?retryWrites=true&w=majority", {

//     useNewUrlParser: true,

//     useUnifiedTopology: true

// }).then(() => {

//     console.log("database is connected")

// }).catch((err) => {

//     console.log("database is not connected");

//     console.log(err);

// })

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://danishkhan705010:1S3rnh1jeaHNMS5W@cluster0.cq9pxoi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);
