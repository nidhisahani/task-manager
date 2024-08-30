import { Request, Response } from 'express';
const { Task } = require('../models/Task');

export const getTasks = async (req: Request, res: Response) => {
  const tasks = await Task.findAll();
  res.json(tasks);
};

export const addTask = async (req: Request, res: Response) => {
  const { title } = req.body;
  const task = await Task.create({ title });
  res.status(201).json(task);
};
