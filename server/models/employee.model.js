
import mongoose, { Schema } from 'mongoose'


const employeeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    courses: {
        type: [String],
        required: true
    },
    
},{timestamps:true});

export const Employee = mongoose.model('Employee', employeeSchema);
