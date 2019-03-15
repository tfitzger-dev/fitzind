import {TaskLog} from "./TaskLog";

export class Task {
  id: number;
  name: string;
  job: string;
  owners: string[];
  hour_estimate: number;
  taskLogs: TaskLog[];

}
