import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-pai',
  templateUrl: './dados-pai.component.html',
  styleUrls: ['./dados-pai.component.css']
})
export class DadosPaiComponent implements OnInit {
  @Input() nome!: string;
  @Input()
  dadosUsu!: {
    email: string;
    funcao: string;
  };

  constructor() { }

  ngOnInit(): void {
  }

}
