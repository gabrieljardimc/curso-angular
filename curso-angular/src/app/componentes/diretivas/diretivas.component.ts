import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})
export class DiretivasComponent implements OnInit {
  tamanho = '40px';
  fonte = 'arial';
  cor = 'blue';
  classes_css = ['titulo-verde','titulo-pequeno'];
  sublinhado_css = 'titulo-sublinhado';

  constructor() { }

  ngOnInit(): void {
  }

}
