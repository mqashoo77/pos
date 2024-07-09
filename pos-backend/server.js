const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const uri = 'mongodb+srv://mqashoo77:qashoO0333@cluster0.f4mcyrr.mongodb.net/pos-store?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});


// mongoose.connect("mongodb+srv://mqashoo77:qashoO0333@cluster0.f4mcyrr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
// .then(()=>{
//     console.log("connected successfully");
// }).catch((error)=>{
//     console.log("error with connected", error);
// })
const ProductModel = require('./models/products')
const CategoryModel = require('./models/categories')

// Define API endpoints
app.get('/products', async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/products/:productId', async (req, res) => {

  const id = req.params.productId;

  try {
    const product = await ProductModel.findOne({id:id});
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/categories', async (req, res) => {
  try {
    const categories = await CategoryModel.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/categories/:categoryId", async (req, res)=>{

  const id = req.params.categoryId;

  try{
      const category = await CategoryModel.findOne({ id: id });
      res.json(category)
      return;

  }catch(error){

      console.log("error while reading category by id", id)
      return res.json("error")
  }
});

app.use("/admins", require("./APIs/admins"));
app.use("/login", require("./routes/login"));

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});