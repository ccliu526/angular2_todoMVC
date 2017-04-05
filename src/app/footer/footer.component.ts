import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  @Input() todos;
  @Output() onClearCompleted = new EventEmitter;
  @Output() onChangeFilterType = new EventEmitter<string>();
  filterType:string = 'all';
  constructor() { }

  clearCompleted(){
    this.onClearCompleted.emit();
  }

  changeFilterType(filterType:string){
 
    this.filterType = filterType;
    this.onChangeFilterType.emit(filterType); 
  }

  ngOnInit() {
  }

}
