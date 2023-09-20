import { Component, Input } from '@angular/core';
import { Skill } from 'src/app/models/skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
})
export class SkillComponent {
  @Input() skills: Skill[] = [];
}
