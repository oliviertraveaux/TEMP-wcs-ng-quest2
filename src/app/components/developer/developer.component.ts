import { Component } from '@angular/core';
import { Developer } from 'src/app/models/developer.model';
import { Skill } from 'src/app/models/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
})
export class DeveloperComponent {
  public JeanMi: Developer = new Developer(
    'Jean-Michel',
    'A-vous',
    36,
    'Homme',
    'Sympa',
    [new Skill('sympa', 'logo1', 'site1'), new Skill('Cool', 'logo2', 'site2')]
  );
}
