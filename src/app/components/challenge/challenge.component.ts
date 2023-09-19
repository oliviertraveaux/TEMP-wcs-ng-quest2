import { Component } from '@angular/core';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css'],
})
export class ChallengeComponent {
  public title = 'Bonjour';
  public isAdmin: boolean = true;

  public toggleIsAdmin(): void {
    this.isAdmin = !this.isAdmin;
  }
}
