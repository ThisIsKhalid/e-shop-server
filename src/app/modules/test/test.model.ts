import mongoose, { Schema } from "mongoose";
import { ITest } from "./test.interface";

const TestSchema = new Schema<ITest>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
  },
});

export const Test = mongoose.model<ITest>("Test", TestSchema);
