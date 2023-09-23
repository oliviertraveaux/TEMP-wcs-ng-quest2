import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {NasaService} from "./services/nasa-service.service";
import {ImgOfTheDay} from "./types/imgOfTheDay.interface";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  private nasaService = inject(NasaService);
  public imgOfTheDay?: ImgOfTheDay;
  private subscription: Subscription = new Subscription();
  title = 'Welcome';

  ngOnInit() {
   const sub = this.nasaService.getImageOfTheDay().subscribe(imageData => this.imgOfTheDay = imageData)
    this.subscription.add(sub)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
