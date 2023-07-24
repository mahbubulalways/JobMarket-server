require('dotenv').config()
const express =require('express')
const cors=require('cors')
const app=express()
app.use(cors())
app.use(express.json())

const port=process.env.PORT || 6500
const { MongoClient, ServerApiVersion } = require('mongodb');
// phTaskJobPortal
// xtPBaFXFlGb7LKAN





const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jgce6rp.mongodb.net/?retryWrites=true&w=majority`;

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
     client.connect();
    // Send a ping to confirm a successful connection

    const FresherJobsCollection = client.db("jobPortal").collection("fresherJob");
    const ExperienceJobsCollection = client.db("jobPortal").collection("experiencedJobs");
    const ItCollection = client.db("jobPortal").collection("itCompanies");

    app.get('/fresher-jobs',async(req,res)=>{
        
    const result =await FresherJobsCollection.find().toArray()
    res.send(result)
})
    app.get('/experience-jobs',async(req,res)=>{
        
    const result =await ExperienceJobsCollection.find().toArray()
    res.send(result)
})
    app.get('/itCompanies',async(req,res)=>{
        
    const result =await ItCollection.find().toArray()
    res.send(result)
})













    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

















app.get('/',(req,res)=>{
    res.send('PH task is running')
})


app.listen(port,()=>{
    console.log('server is running port',port);
})