import { NgModule, Directive } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './components/directives/directives.component';
import { ChallengeComponent } from './components/challenge/challenge.component';
import { HighlightDirective } from './directives/highlight.directive';
import { DisplayGuestsDirective } from './directives/display-guests.directive';
import { MoviesComponent } from './components/movies/movies.component';
import { FirstMovieDirective } from './directives/first-movie.directive';
import { MoviesVisibleDirective } from './directives/movies-visible.directive';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { MenuComponent } from './components/menu/menu.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DeveloperComponent } from './components/developer/developer.component';
import { SkillComponent } from './components/skill/skill.component';
import { CocktailListComponent } from './components/cocktail-list/cocktail-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    DirectivesComponent,
    ChallengeComponent,
    HighlightDirective,
    DisplayGuestsDirective,
    MoviesComponent,
    FirstMovieDirective,
    MoviesVisibleDirective,
    MenuComponent,
    SignUpComponent,
    DeveloperComponent,
    SkillComponent,
    CocktailListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
