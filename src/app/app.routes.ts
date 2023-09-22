import { Routes } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { CocktailListComponent } from './components/cocktail-list/cocktail-list.component';

const ROUTES: Routes = [
  { path: '', component: UserProfileComponent },
  { path: 'user', component: UserProfileComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'cocktails', component: CocktailListComponent },
];

export { ROUTES };
