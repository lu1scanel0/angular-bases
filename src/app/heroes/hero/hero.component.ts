import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public nameDefault = 'ironman';
  public ageDefault = 45;
  public name: string = this.nameDefault;
  public age: number = this.ageDefault;

  get capitalizedName(): string {
    return this.name.toUpperCase();

  }

  getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`;

  }

  changeHero(): void {
    this.name = 'spiderman';
  }

  changeAge(): void {
    this.age = 39;
  }

  reset(): void {
    this.name = this.nameDefault;
    this.age = this.ageDefault;
  }

}
