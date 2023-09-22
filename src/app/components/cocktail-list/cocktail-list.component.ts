import { Component, OnInit, inject } from '@angular/core';
import { CocktailService } from 'src/app/services/cocktail.service';
import { Cocktail } from 'src/app/types/cocktail.interface';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
})
export class CocktailListComponent implements OnInit {
  cocktails: Cocktail[] = [];
  private cocktailService = inject(CocktailService);

  trackByIndex(index: number) {
    return index;
  }

  ngOnInit(): void {
    this.cocktailService
      .getCocktails()
      .subscribe(
        (cocktailsMock: Cocktail[]) => (this.cocktails = cocktailsMock)
      );
  }
}
