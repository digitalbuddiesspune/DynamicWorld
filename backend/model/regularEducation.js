import mongoose from 'mongoose'
const CourseSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    courseName: { type: String, required: true },
    specialization: { type: String, default: "General" },
    duration: { type: String, default: "" },
    eligibility: { type: String, default: "" },
    mode: { type: String, default: "Regular" },
    fees: { type: Number, default: 0 },
  },
  { _id: false }
);
const regularEducationSchema = mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  location: { type: String, required: true },
  established: { type: String, required: false },
  primary_focus: { type: String, required: false },
  description: { type: String, required: true },
  accreditation: [{ type: String }],
  image: { type: String },
  awards: [{ type: String }],
  website: { type: String, default: null },
  courses: [CourseSchema]
},
  { timestamps: true }

);

const regularEducation = mongoose.model("regularEducation", regularEducationSchema);
export default regularEducation;