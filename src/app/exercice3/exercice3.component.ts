import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrls: ['./exercice3.component.css']
})
export class Exercice3Component implements OnInit {
  /* le typage et le public ne devrait normalement pas etre defini dans le sens ou Les variables son public par default.
   Concernant le typage il se fait automatiquement si la propriété est défini comme c'est le cas ici (true) */

  public statut: boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
