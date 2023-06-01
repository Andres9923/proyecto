import { Schema, models, model } from "mongoose";

const userSchema = new Schema({
    // id: {
    //     type: String,
    //     required: true,
    //     unique: true,
    //     trim: true,
    //     unique: true,
    // },
    userName: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        unique: true,
    },
    // email: {
    //     type: String,
    //     required: true,
    //     trim: true,
    //     unique: false,
    // },
    password: {
        type: String,
        required: true,
        trim: true,
        unique: false,
    },
    date: {
        type: String,
        required: false,
        trim: false,
        unique: false,
    },
},{
    timestamps: true,
    versionKey: false,
});


export default models.user || model("user", userSchema);