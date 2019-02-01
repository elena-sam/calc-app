import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculatrice-component',
  templateUrl: './calculatrice-component.component.html',
  styleUrls: ['./calculatrice-component.component.css']
})
export class CalculatriceComponentComponent implements OnInit {
  calcNum1: number;
  calcNum2: number;
  result: number;
  erreur: string;
  constructor() {}

  calcAdd(): void {
    this.erreur = null;
    this.result = this.calcNum1 + this.calcNum2;
  }

  calcSub(): void {
    this.erreur = null;
    this.result = this.calcNum1 - this.calcNum2;
  }

  calcDiv(): void {
    if (this.calcNum2 === 0) {
      this.result = null;
      this.erreur = 'Impossible de diviser par 0';
    } else {
      this.result = this.calcNum1 / this.calcNum2;
    }
  }

  calcMult(): void {
    this.erreur = null;
    this.result = this.calcNum1 * this.calcNum2;
  }

  ngOnInit(): void {
    this.calcNum1 = 9;
    this.calcNum2 = 5;
  }

}
