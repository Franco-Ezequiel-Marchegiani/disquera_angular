import { Component } from '@angular/core';

@Component({ /*Asocia al controlador una plantilla HTML (app.component.html)
  Y un selector (<app-root></app-root>) 
  La función declaradora (@component) se encarga de declarar diversas cuestiones*/
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'angularZ';
  visible = false;

 
  
  mostrar(){
    this.visible = true;
  }
  
}
