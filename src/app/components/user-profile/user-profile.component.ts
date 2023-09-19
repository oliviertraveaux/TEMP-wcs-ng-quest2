import { Component } from '@angular/core';
import { User } from 'src/app/types/user.interface';

class UserProfile implements User {
  public isAgeVisible = false;

  constructor(
    private _name: string,
    private _firstName: string,
    private _age: number,
    public quote: string,
    private _photo: string
  ) {}

  get name(): string {
    return this._name;
  }

  get firstName(): string {
    return this._firstName;
  }

  get age(): number {
    return this._age;
  }

  get photo(): string {
    return this._photo;
  }

  toggleAgeVisibility() {
    this.isAgeVisible = !this.isAgeVisible;
  }
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  public user: UserProfile = new UserProfile(
    'Doe',
    'John',
    25,
    '',
    'https://randomuser.me/api/portraits/lego/2.jpg'
  );
}
