import { Component } from '@angular/core';
@Component({
  selector: 'app-heroes-list',
  template: `<h3>Listado de Heroes</h3>

  <div *ngIf="deletedHero; else nothingWasDeleted">
    <h3>Heroe borrado: <small class="text-danger">{{deletedHero}}</small></h3>
  </div>
  <ng-template #nothingWasDeleted>
    <h3>No ha borrado nada.</h3>
  </ng-template>

  <button
  *ngIf="heroNames.length > 0"
  (click)="removeLastHero()"
  class="btn btn-outline-danger">
    Borrar último heroe
  </button>



  <ul class="mt-2 list-group">
    <li *ngFor="let name of heroNames" class="list-group-item">{{name}}</li>
  </ul>
  `
})

export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
  public deletedHero?: string;
  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }

}
