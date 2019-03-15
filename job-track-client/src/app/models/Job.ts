import {Task} from './Task';

export class Job {
  id: number;
  name: string;
  owners: number[];
  estimated_completion_date: Date;
  tasks: Task[];

}
