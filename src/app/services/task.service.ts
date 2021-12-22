import { Injectable } from '@angular/core';
import { TASKS } from '../mockup-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(){
    return TASKS;
  }
}
