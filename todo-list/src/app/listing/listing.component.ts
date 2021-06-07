import {Component,} from '@angular/core';
import {Task} from './task';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})

export class ListingComponent{
  titleList: string = "Liste :";
  titleUpd = new FormControl('');
  idUpd = new FormControl('');

  updateForm : boolean = false;
  id : number = 1;

  update : any;

  tasks : Task[] = [];

  constructor() {
    if (localStorage.getItem("tasks")){
      this.getExistingTasks(localStorage.getItem("tasks"))
    }
  }

  addTask(title: string){
    if (title !== ''){
      const task = new Task(this.id, title);
      this.tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
      this.id++;
    }
  }

  editTask(title : string, idTask : any){
    this.tasks.forEach((task) => {
      if (task.id === idTask){
        task.title = title;
        this.updateLocalStorage()
        this.updateForm = false;
      }
    });
  }

  getExistingTasks(localTasks: string | null){
    if (localTasks != null) {
      const jsonTasks = JSON.parse(localTasks);

      for (let i = 0; i < jsonTasks.length; i++){
        let task :Task = new Task(jsonTasks[i].id, jsonTasks[i].title)
        task.finish = jsonTasks[i].finish
        this.tasks.push(task)
      }
    }
  }

  removeTask(idTask: any){
    this.tasks.forEach((task) => {
      if (task.id === idTask){
        var taskRemove = this.tasks.indexOf(task);
        this.tasks.splice(taskRemove, 1);
        this.updateLocalStorage()
      }
    });
  }

  getNumberTasks(){
    return this.tasks.length;
  }

  changeStatus(idTask: any){
    this.tasks.forEach((task) => {
      if (task.id === idTask){
        task.finish = !task.finish;
        this.updateLocalStorage()
      }
    });
  }

  showUpdateForm(idTask : any){
    this.tasks.forEach((task) => {
      if (task.id === idTask){
        this.updateForm = true;
        this.titleUpd.setValue(task.title);
        this.idUpd.setValue(task.id);
      }
    });
  }

  updateLocalStorage(){
    localStorage.removeItem('tasks');
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

}
