import { Request, Response } from "express";

export const getExamples = (req: Request, res: Response) => {
  res.status(200).json({ message: "List of examples from controller" });
};

export const createExample = (req: Request, res: Response) => {
  res.status(201).json({ message: "Created an example from controller" });
};
