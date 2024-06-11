import mongoose, { Schema } from "mongoose";
import { ITest } from "./test.interface";

const TestSchema = new Schema<ITest>({
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

export const Test = mongoose.model<ITest>("Test", TestSchema);
