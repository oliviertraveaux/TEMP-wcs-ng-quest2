import { NgModule, Directive } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './components/directives/directives.component';
import { ChallengeComponent } from './components/challenge/challenge.component';
import { HighlightDirective } from './directives/highlight.directive';
import { DisplayGuestsDirective } from './directives/display-guests.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    DirectivesComponent,
    ChallengeComponent,
    HighlightDirective,
    DisplayGuestsDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
