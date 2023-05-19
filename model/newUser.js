import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Age: {
      type: Number,
      required: true,
      min: 2,
    },
    Email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, "is invalid"],
    },
  },
  { timestamps: true }
);

userSchema.plugin(uniqueValidator);

export default mongoose.model("USERS", userSchema);
