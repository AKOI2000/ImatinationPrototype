import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req, res) {
  try {
    const { folder } = req.query;

    const result = await cloudinary.search
      .expression(`folder="${folder}"`)
      .sort_by("public_id", "asc")
      .max_results(200)
      .execute();

    const images = result.resources.map((img) =>
      cloudinary.url(img.public_id, {
        transformation: [
          { width: "auto", crop: "scale" },
          { quality: "auto" },
          { fetch_format: "auto" },
          { dpr: "auto" },
        ],
      })
    );

    res.status(200).json({ images });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}