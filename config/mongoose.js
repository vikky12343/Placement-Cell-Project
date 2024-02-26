const mongoose = require('mongoose');
const DB = 'mongodb+srv://dbuser:dbuser@cluster0.ivebilz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';


mongoose.connect(DB, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', function () {
	console.log('Connected to Database :: Mongodb');
});

module.exports = mongoose;
