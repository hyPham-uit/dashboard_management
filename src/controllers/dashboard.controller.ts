import { Get, Route, Tags, Body, Path, Put } from "tsoa";
import { Dashboard } from "../models/dashboard.entity";
import {
  getDashboards,
  IDashboardPayload,
  updateDashboard,
} from "../repositories/dashboard.repository";

@Route("dashboards")
@Tags("Dashboard")
export default class DashboardController {
  @Get("/")
  public async getDashboards(): Promise<Array<Dashboard>> {
    return getDashboards();
  }

  @Put("/:id")
  public async updateDashboard(
    @Path() id: string,
    @Body() body: IDashboardPayload
  ): Promise<Dashboard | null> {
    return updateDashboard(id, body);
  }
}
