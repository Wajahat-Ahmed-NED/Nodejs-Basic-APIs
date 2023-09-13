const ActivityLog = require("../models/activity");

exports.getActivityLogs = async (req, res) => {
  try {
    const userId = req.params.id;
    if (!userId) {
      return res.status(401).json({ message: "Invalid Id" });
    }
    const activityLog = await ActivityLog.find({ userId }).sort({
      timestamp: -1,
    });
    res.status(200).json(activityLog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.createActivityLogs = async (req, res) => {
  try {
    const { userId, action, description } = req.body;
    if (!userId || !action || !description) {
      return res.status(401).json({ message: "Fill All the Details" });
    }
    const activityLog = new ActivityLog({ userId, action, description });
    await activityLog.save();
    res.status(200).json(activityLog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
