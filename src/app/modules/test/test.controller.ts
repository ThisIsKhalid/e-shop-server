import { Request, Response } from "express";
import { addTest, getTest } from "./test.service";

export const addTestCont = async (req: Request, res: Response) => {
  const data = req.body;

  const result = await addTest(data);

  res.send({
    success: true,
    data: result,
  });
};

export const getTestCont = async (req: Request, res: Response) => {
  const result = await getTest();

  res.send({
    success: true,
    data: result,
  });
};
