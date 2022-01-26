import { Get, Route, Tags, Post, Body, Path, Delete, Put } from "tsoa";
import { DeleteResult } from "typeorm";
import { Task } from "../models/task.entity";
import {
  createTask,
  getTasks,
  ITaskPayload,
  getTask,
  deleteTask,
  updateTask,
} from "../repositories/task.repository";

@Route("tasks")
@Tags("Task")
export default class TaskController {
  @Get("/")
  public async getTasks(): Promise<Array<Task>> {
    return getTasks();
  }

  @Post("/")
  public async createTask(@Body() body: ITaskPayload): Promise<Task> {
    return createTask(body);
  }

  @Get("/:id")
  public async getTask(@Path() id: string): Promise<Task | null> {
    return getTask(id);
  }

  @Put("/:id")
  public async updateTask(
    @Path() id: string,
    @Body() body: ITaskPayload
  ): Promise<Task | null> {
    return updateTask(id, body);
  }

  @Delete("/:id")
  public async deleteTask(@Path() id: string): Promise<DeleteResult> {
    return deleteTask(id);
  }
}
