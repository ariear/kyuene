import mongoose from "mongoose"

const questionSchema = new mongoose.Schema({
    userId: String,
    question: String
})

const Question = mongoose.models.Question || mongoose.model('Question' , questionSchema) 

export default Question