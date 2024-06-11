import { Schema, model } from "mongoose";

const createProductSchema = new Schema({
  name:{
        type: String,
        required: true,
  },
  price:{
        type: Number,
        required: true,
  },
category: {
        type: String,
        enum: ['books', 'electronics','clothing','other'],
        default: 'ohter',
},
description: {
        type: String,
},
},
{
        timestamps: true,
        versionKey: false,
},
);

export const Product = model("product", createProductSchema);

