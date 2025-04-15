const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://danishkhan705010:1S3rnh1jeaHNMS5W@cluster0.cq9pxoi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {

    useNewUrlParser: true,

    useUnifiedTopology: true

}).then(() => {

    console.log("database is connected")

}).catch((err) => {

    console.log("database is not connected");

    console.log(err);

})
