import { Webhook } from "svix";
import User from "../models/User.js";
import connectDB from "../configs/mongodb.js"; // Import the connectDB function

// API Controller Function to manage Clerk User with database

export const clerkWebhooks = async (req, res) => {
  try {
    await connectDB(); // Ensure the database connection is established

    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
    
    await whook.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    const { data, type } = req.body;

    switch (type) {
      case "user.created": {
        const userData = {
          _id: data.id,
          email: data.email_addresses[0].email_address,
          name: data.name.first_name + " " + data.name.last_name,
          imageUrl: data.imageUrl,
        };
        await User.create(userData);
        res.json({});
        break;
      }
      case "user.updated": {
        const userData = {
          email: data.email_addresses[0].email_address,
          name: data.name.first_name + " " + data.name.last_name,
          imageUrl: data.imageUrl,
        };
        await User.findByIdAndUpdate(data.id, userData);
        res.json({});
        break;
      }
      case "user.deleted": {
        await User.findByIdAndDelete(data.id);
        res.json({});
        break;
      }

      default:
        break;
    }
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
