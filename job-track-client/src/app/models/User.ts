import {Job} from "./Job";
import {Task} from './task.model';
import {Deserializable} from "./deserializable.model";

export class User{
  url: string;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  jobs: Job[];
  tasks: Task[];

  constructor(input: any){
    Object.assign(this, input);
    this.tasks = (input.tasks) ? input.tasks.map((task) => new Task(task)) : null
    this.jobs = (input.jobs) ? input.jobs.map((job) => new Job(job)) : null

  }

  testFun(): string{
    return "Hello World"
  }
}
