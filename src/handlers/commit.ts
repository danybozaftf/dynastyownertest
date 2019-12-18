import { Request, Response, NextFunction } from "express";
import * as connectivity from "../connectivity";

export const getCommits = async (req: Request, res: Response) => {
  try {
    const commits = await connectivity.getCommits();
    res.send({
      object: "list",
      data: commits,
      total: 12
    });
  } catch (err) {
    res.status(404).send({ message: "Unable to fetch commits" });
  }
};
