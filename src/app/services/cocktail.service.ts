import { Injectable } from '@angular/core';
import { Cocktail } from '../types/cocktail.interface';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  getCocktails(): Cocktail[] {
    return [
      {
        name: 'mojito',
        price: 8,
        iamgeUrl:
          'https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg',
      },
      {
        name: 'Spritz',
        price: 8,
        iamgeUrl:
          'https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg',
      },
      {
        name: 'Long Island',
        price: 8,
        iamgeUrl:
          'https://www.thecocktaildb.com/images/media/drink/nkwr4c1606770558.jpg',
      },
    ];
  }
}
