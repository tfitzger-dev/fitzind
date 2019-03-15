import {Job} from "./Job";
import {Task} from './Task';

export class User{
  url: string;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  jobs: Job[];
  tasks: Task[];
}
