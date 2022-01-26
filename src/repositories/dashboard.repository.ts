import { getRepository } from "typeorm";
import { Dashboard } from "../models/dashboard.entity";
import { Widget } from "../models/widget.entity";

export interface IDashboardPayload {
  title: string;
  layoutType: string;
  userId: string;
  widget: Array<Widget>
}

export const getDashboards = async (): Promise<Array<Dashboard>> => {
  const dashboardRepository = getRepository(Dashboard);
  return dashboardRepository.find();
};

export const updateDashboard = async (
  id: string,
  payload: any
): Promise<Dashboard | null> => {
  const {title, layoutType, userId} = payload
  const dashboardRepository = getRepository(Dashboard);
  const dashboard = await dashboardRepository.findOne({ id: id });
  if (!dashboard) return null;
  return dashboardRepository.save({
    ...dashboard, title, layoutType, userId
  });
};
