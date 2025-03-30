import { clerkClient } from "@clerk/express";

// Middleware ( protect Educator routes)
export const protectEducator = async (req, res, next) => {
  try {
    const userId = req.auth.userId;
    const data = await clerkClient.users.getUser(userId);
    
    if (data.publicMetadata.role !== "educator") {
      return res.json({ success: false, message: "Unauthorized Access" });
    }
    next();
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
