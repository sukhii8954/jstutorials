import mongoose from "mongoose";

const medicalRecordSchema = mongoose.Schema({}, { timeStamps: true });

export const medicalRecord = mongoose.model(
  "medicalRecord",medicalRecordSchema);
