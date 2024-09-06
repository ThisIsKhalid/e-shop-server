import { Request, Response } from "express";
import { addTest, getTest } from "./test.service";

export const addTestCont = async (req: Request, res: Response) => {
  if (!req.file) {
    // No file was uploaded
    return res.status(400).json({ error: "No file uploaded" });
  }

  // File upload successful
  const { email } = req.body;
  const fileUrl = req.file.path; // URL of the uploaded file in Cloudinary

  res.send({
    success: true,
    data: {
      email,
      fileUrl,
    },
  });
};

export const getTestCont = async (req: Request, res: Response) => {
  const result = await getTest();

  res.send({
    success: true,
    data: result,
  });
};
