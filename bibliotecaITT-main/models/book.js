import { Schema, models, model } from "mongoose";

const bookSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        unique: true,
    },
    bookName: {
        type: String,
        required: true,
        trim: true,
        unique: false,
    },
    genre: {
        type: String,
        required: true,
        trim: true,
        unique: false,
    },
    agePublication: {
        type: String,
        required: true,
        trim: true,
        unique: false,
    },
    author: {
        type: String,
        required: true,
        trim: true,
        unique: false,
    },
    priceBook: {
        type: String,
        required: true,
        trim: true,
        unique: false,
    },
    date: {
        type: String,
        required: true,
        trim: false,
        unique: false,
    },
},{
    timestamps: true,
    versionKey: false,
});



export default models.book || model("book", bookSchema);        


