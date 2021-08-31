import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contatos';
  mostrandoModal = false;
  abrirModal(){
    // console.log("fala que eu te escuto");
    this.mostrandoModal = true;
  }
  fecharModal(){
    this.mostrandoModal = false;
  }
}
