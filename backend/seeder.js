const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");
const User = require("./models/User");
const Cart = require("./models/Cart");
const products = require("./data/products");

dotenv.config();

// connect to mongodb database
mongoose.connect(process.env.MONGO_URL);

//function to save the data
const seedData = async () => {
  try {
    // Clearing existing data
    await Product.deleteMany();
    await User.deleteMany();
    await Cart.deleteMany();

    // create a default admin user
    const createUser = await User.create({
      name: "Admin User",
      email: "admin@example.com",
      password: "123456",
      role: "admin",
    });

    // Assign the default user ID to each product
    const userID = createUser._id;
    const sampleProduct = products.map((product) => {
      return { ...product, user: userID };
    });

    // Insert the products into database
    await Product.insertMany(sampleProduct);

    console.log("Product data seeded successfully");
    process.exit();
  } catch (error) {
    console.log("Error seeding the data:", error);
    process.exit();
  }
};

seedData();
