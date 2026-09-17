import mongoose from 'mongoose';

// Define the MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotel';

// Connect to MongoDB
mongoose.connect(mongoURL);

// Get the default connection
const db = mongoose.connection;

// Define event listeners
db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('error', (err) => {
    console.log('MongoDB connection error:', err);
});

db.on('disconnected', () => {
    console.log('Disconnected from MongoDB server');
});

// Export the database connection
export default db;