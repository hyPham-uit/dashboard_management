import { DeleteResult, getRepository } from "typeorm";
import { Task } from "../models/task.entity";

export interface ITaskPayload {
  task: string;
  isCompleted: boolean;
  userId: string;
}

export const getTasks = async (): Promise<Array<Task>> => {
  const taskRepository = getRepository(Task);
  return taskRepository.find();
};

export const createTask = async (
  payload: ITaskPayload
): Promise<Task> => {
  const taskRepository = getRepository(Task);
  const task = new Task();
  return taskRepository.save({
    ...task,
    ...payload,
  });
};

export const getTask = async (id: string): Promise<Task | null> => {
  const taskRepository = getRepository(Task);
  const task = await taskRepository.findOne({ id: id });
  if (!task) return null;
  return task;
};

export const deleteTask = async (id: string): Promise<DeleteResult> => {
  const taskRepository = getRepository(Task);
  const task = await taskRepository.delete({ id: id });
  return task;
};

export const updateTask = async (
  id: string,
  payload: any
): Promise<Task | null> => {
  const {task, isCompleted, userId} = payload
  const taskRepository = getRepository(Task);
  const taskk = await taskRepository.findOne({ id: id });
  if (!taskk) return null;
  return taskRepository.save({
    ...taskk, task, isCompleted, userId
  });
};
