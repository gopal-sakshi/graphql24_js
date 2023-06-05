import mongoose from "mongoose";


let studentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    gender: String,
    subjects: [String]    
}, { strict: false });

const Student = mongoose.model("Student", studentSchema);

export { Student };