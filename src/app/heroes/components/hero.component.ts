import { Component } from '@angular/core';
@Component({
  selector: 'app-heroes-hero',
  template: `<h1>{{name}}</h1>
  <dl>
    <td>Nombre::</td>
    <dd>{{name}}</dd>

    <td>Edad::</td>
    <dd>{{age}}</dd>

    <td>Metodo:</td>
    <dd>{{getHeroDescription()}}</dd>

    <td>Capitalizado:</td>
    <dd>{{capitalizedName}}</dd>

  </dl>
  <button
  *ngIf="name !== 'Spiderman'"
  (click)="changeHero()"
  class="btn btn-primary mx-2" >
    Cambiar Nombre
  </button>
  <button
  *ngIf="age !== 25"
  (click)="changeAge()"
  class="btn btn-primary">
    Cambiar Edad
  </button>

  <button
  (click)="resetForm()"
  class="btn btn-primary mx-2">
  Reset
  </button>
  `
})

export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }
  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }
  changeHero(): void {
    this.name = 'Spiderman'
  }

  changeAge(): void {
    this.age = 25
  }

  resetForm(): void {
  this.name = 'ironman';
  this.age = 45;

  document.querySelectorAll('h1')!.forEach(element => {
    element.innerHTML = '<h1>Desde Angular</h1>';
  });
  }
}
