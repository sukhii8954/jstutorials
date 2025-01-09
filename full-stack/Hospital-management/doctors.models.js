import mongoose from "mongoose";

 const HospitalHoursSchema = mongoose.Schema(
{
   hospitalName:{
    type:mongoose.Schema.Types.ObjectId,
    ref: "Hospital"
   },
   workingHours: {
    type: String
   }
  
});

const doctorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    salary: {
      type: String,
      required: true,
    },
    qualifications: {
      type: String,
      required: true,
    },

    experienceInyears: {
      type: Number,
      default: 0
    },

    worksInHospitals:[  // multiple hospitals so using array 
       {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
       },
    ],
     
    HoursInHospital:{
      type: [HospitalHoursSchema]
    }

  },
  { timeStamps: true }
);

export const Doctors = mongoose.model("Doctors", doctorSchema);
