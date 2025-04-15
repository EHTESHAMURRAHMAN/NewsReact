// createAdmin.js
const mongoose = require('mongoose');
const Admin = require('./models/Admin');

mongoose.connect("mongodb+srv://danishkhan705010:1S3rnh1jeaHNMS5W@cluster0.cq9pxoi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(async () => {
    console.log("database is connected");
    try {
      const admin = new Admin({ name: "new admin", password: "987654321" });
      await admin.save();
      console.log("Admin user created successfully");
    } catch (err) {
      console.error("Error creating admin:", err);
    } finally {
      process.exit(0);
    }
  })
  .catch((err) => {
    console.log("database is not connected");
    console.error(err);
  });


