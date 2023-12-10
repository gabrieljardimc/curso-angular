import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent implements OnInit {
  meuNumero : number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onChangeNumber(): void {
    this.meuNumero = Math.floor(Math.random()*10);
  }


}
