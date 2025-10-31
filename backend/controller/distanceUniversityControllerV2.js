
import { distanceUniversityV2 } from "../model/distanceUniversityV2.js";

export const insertManyDistanceUniversitiesV2 = async (req, res) => {
  try {
    const universities = req.body;
    if (!Array.isArray(universities) || universities.length === 0) {
      return res.status(400).json({ message: "Please provide an array of universities." });
    }
    const insertedUniversities = await distanceUniversityV2.insertMany(universities);
    res.status(201).json({
      success: true,
      message: "Universities inserted successfully",
      data: insertedUniversities
    });
  } catch (error) {
    console.error("Error inserting universities:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
export const getAllDistanceUniversitiesV2 = async (req, res) => {
  try {
    const response = await distanceUniversityV2.find();
    res.status(200).json({
      success: true,
      data: response,
      message: "Universities fetched successfully!"
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch the universites",
      error: error.message

    })
  }
}
export const getDistanceUniversityByIdV2 = async (req, res) => {
  try {
    const universityName = req.query.universityName?.trim()
    const data = await distanceUniversityV2.findOne({ universityName });
    res.status(200).json({
      success: true,
      data: data,
      message: "University Fetched Successfully!"
    })
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetched the university",
      error: error.message
    })
  }
}
export const getSelectedUniversityFieldsDistanceV2 = async (req, res) => {
  try {
    const universities = await distanceUniversityV2.find({}, {
      universityName: 1,
      onlineEducation: 1,
      shortDescription: 1,
      establish: 1,
      location: 1,
      universityRanking: 1,
      _id: 0, // exclude MongoDB _id field if not needed
    });

    res.status(200).json({
      success: true,
      count: universities.length,
      data: universities,
    });
  } catch (error) {
    console.error("Error fetching selected university fields:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
export const getSingleDistanceUniversity = async (req, res) => {
  const { slug } = req.params;
  console.log(slug);
  try {
    const data  = await distanceUniversityV2.findOne({ slug });
    console.log("Hey..............")
    console.log(data)
    if (!data) {
      return res.status(404).json({
        success: false,
        message: "University not found...",
      });
    }
    res.status(200).json({
      success: true,
      data,
      message: "Data Fetched Successfully!",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};