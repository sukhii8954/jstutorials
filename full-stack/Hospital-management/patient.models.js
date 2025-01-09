import mongoose from "mongoose";

const patientSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    diaognonsedwith: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },

    bloodGroup: {
      type: String,
      required: true,
    },

    age: {
      type: Number,
      required: true,
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Others"],
      required: true,
    },
    
    admittedIn: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
    },

  },
  { timeStamps: true }
);

export const Patient = mongoose.model("Patient", patientSchema);
