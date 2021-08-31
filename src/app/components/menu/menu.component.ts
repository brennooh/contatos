import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  @Output() addContatoOnClick:EventEmitter<null> = new EventEmitter()

  mostrarModalClick(){
    this.addContatoOnClick.emit();
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
