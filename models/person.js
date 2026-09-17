import mongoose from "mongoose";

// define person Schema
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
    work: {
        type: String,
        enum: ['chef', 'waiter', 'manager'],
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    addres: {
        type: String,

    },
    salary: {
        type: Number,
        required: true,
    }
});


// Create person model:
const person=mongoose.model('person',personSchema);
export default person;