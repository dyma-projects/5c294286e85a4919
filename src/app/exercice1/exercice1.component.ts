import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  liaison1: string = null;
  liaison2: string = 'https://angular.dyma.fr';
  liaison3: string = 'Liaison 3';
  constructor() { }

  ngOnInit() {
  }

  public updateName(): void {
    this.liaison1 = "Dyma"
  }

}
