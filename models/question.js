import mongoose from "mongoose"

const questionSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    question: String,
    answer: {
        type: String,
        required: false
    }
})

const Question = mongoose.models.Question || mongoose.model('Question' , questionSchema) 

export default Question