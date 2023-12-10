import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/servicos/list.service';

@Component({
  selector: 'app-two-way-biding',
  templateUrl: './two-way-biding.component.html',
  styleUrls: ['./two-way-biding.component.css']
})
export class TwoWayBidingComponent implements OnInit {

  nome: string = '';
  tipo: string = '';
  idade: number = 0;

  animal: Animal = {
    id: 0,
    nome: this.nome,
    tipo: this.tipo,
    idade: this.idade
  }
  
  constructor(private listService: ListService, private router: Router) {
  

   }

  ngOnInit(): void {
  }

  incluiAnimal(nome: string, tipo: string, idade: number ) {
    this.animal.nome = nome;
    this.animal.tipo = tipo;
    this.animal.idade = idade;
    this.listService.setItem(this.animal).subscribe();
    this.router.navigate(['/list']);  
  }

}
