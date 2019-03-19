export class TaskLog{
  url: string;
  id: number;
  user:string;
  task:string;
  hours: number;
  log_date:Date;

  constructor(input: any){
    this.url = input.url;
    this.id = input.id;
    this.user = input.user;
    this.task = input.task;
    this.hours = input.hours;
    this.log_date = new Date(input.log_date);
    this.log_date.setHours(0, 0, 0, 0)
  }
}
