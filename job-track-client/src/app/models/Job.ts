import {Task} from './task.model';
import {Deserializable} from "./deserializable.model";

export class Job{
  id: number;
  name: string;
  owners: number[];
  estimated_completion_date: Date;
  tasks: Task[];

  constructor(input: any){
    this.id = input.id;
    this.name = input.name;
    this.owners = input.owners;
    this.estimated_completion_date = input.estimated_completion_date;
    this.tasks = (input.tasks) ? input.tasks.map((task) => new Task(task)) : null
  }

}
