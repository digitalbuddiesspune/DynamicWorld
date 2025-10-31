import regularEducation from "../model/regularEducation.js";
export const addToRegularEducation = async (req, res) => {
  const universities = req.body;
  if (!universities) {
    res.status(400).json({
      message: "Please provide the data!"
    })
  }
  if (!Array.isArray(universities)) {
    res.status(400).json({
      message: "Please provide the data in array!"
    })
  }
  try {
    const data = await regularEducation.insertMany(universities);
    res.status(201).json({
      success: true,
      data: data,
      message: "Data Inserted SucccessFully!"
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error
    })
  }

}

export const getAllFromRegularEdu = async (req, res) => {
  try {
    const data = await regularEducation.find();
    res.status(200).json({
      success: true,
      data: data,
      message: "Data Fetched Successfully!"
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      error: error
    })
  }
}
export const getOne = async (req, res) => {
  try {
    // 1) Read & normalize input
    let raw = req.query.universityName || req.query.name || "";
    // handle '+' and decode
    raw = raw.replace(/\+/g, " ");
    const q = decodeURIComponent(raw).trim();

    if (!q) {
      return res.status(400).json({
        success: false,
        message: "Please provide ?universityName=<value>",
      });
    }

    // 2) Build a flexible, case-insensitive query
    const byName = { name: { $regex: `^${q}$`, $options: "i" } };
    const byUniName = { universityName: { $regex: `^${q}$`, $options: "i" } };
    const bySlug = { slug: { $regex: `^${q.replace(/\s+/g, "-").toLowerCase()}$` } };

    const data = await regularEducation
      .findOne({ $or: [byName, byUniName, bySlug] })
      .lean();

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "University not found",
      });
    }

    return res.status(200).json({
      success: true,
      data,
      message: "University fetched successfully!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch the university",
      error: error.message,
    });
  }
};

export const getSingleRegularUniversity = async (req, res) => {
  const { slug } = req.params;
  console.log(slug);
  try {
    const data = await regularEducation.findOne({ slug });
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