import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Gustavo';
  userData = {
    email: 'gustavomedeiro@gmail.com',
    funcao: 'analista de dados'
  }
  title = 'curso-angular';
}
