import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent {
  title: string = 'Raclette party 🧀';
  isThisIngredientVital: boolean = false;
  isGuestListDisplayed: boolean = false;
  songList: string[] = ['Alejandro', 'Ne me quitte pas', 'Le temps est bon'];
}
