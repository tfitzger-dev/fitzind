import {TaskLog} from "./TaskLog";
import {User} from "./User";
import {Deserializable} from "./deserializable.model";

export class Task{
  id: number;
  name: string;
  job: string;
  owners: string[];
  hour_estimate: number;
  taskLogs: TaskLog[];

  constructor(input: any){
    this.name = input.name;
    this.job = input.job;
    this.owners = input.owners;
    this.hour_estimate = input.hour_estimate;

    this.taskLogs =  (input.taskLogs) ? input.taskLogs.map(taskLog => new TaskLog(taskLog)) : null
  }

  public totalHours():number{
    if(this.taskLogs.length <= 0) return 0
    return this.taskLogs.map<number>(log => log.hours).reduce((acc, hours) => acc + hours)
  }

  public logByDate(date:Date):number{
    if(this.taskLogs.length <= 0) return null;
    let filteredLogs = this.taskLogs.filter(log => log.log_date.getTime() === date.getTime());
    if(filteredLogs.length > 0) {
      return filteredLogs[0].hours;
    }
    else return null;
  }
}


