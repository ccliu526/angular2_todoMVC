import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DataService]
})
export class AppComponent {
  inputHint = "What needs to be done?";
  todos: any[]= [];
  todo:string = "";
  filterType: string = 'all';
  allChecked: boolean = false;
  doEnter(todo){
    
    if(todo != "") {
      
      this.todos.push(
        {
          content: todo,
          checked: false
        }
      );
      this.todo = "";
      //console.log(this.todos);
    }
  
  }

  constructor(private dataService: DataService){

  }

  onClearCompleted() {
    
    this.todos = this.todos.filter(todo =>{return todo.checked == false;});
  }

  onChangeFilterType($event){

    this.filterType = $event;
  }

  toggleAllCheck(allChecked:boolean){

    this.todos.forEach(todo => {
      todo.checked = allChecked;
    });
  }

  deleteTodo(index){
    this.todos.splice(index,1);
  }

  changeTodo(){
   
    this.allChecked = this.todos.filter(todo =>{return !todo.checked}).length === 0;
  }
  
}
