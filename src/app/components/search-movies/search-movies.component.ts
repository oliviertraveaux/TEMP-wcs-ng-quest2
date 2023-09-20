import { Component, OnInit, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MovieTypesEnum } from '../../types/movie-types.enum';
import { FicheTypesEnum } from '../../types/fiche-types.enum';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css'],
})
export class SearchMoviesComponent implements OnInit {
  private _fb = inject(FormBuilder);
  public movieTypes: string[] = Object.values(MovieTypesEnum);
  public fiches: string[] = Object.values(FicheTypesEnum);

  public minYear: number = 1900;
  public maxYear: number = new Date().getFullYear();
  private _isSubmited: boolean = false;

  isRequiredValidator(title: string, id: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const idControl = control.get(id);
      const titleControl = control.get(title);

      if (idControl?.value || titleControl?.value) {
        return null;
      }
      return { isRequired: true };
    };
  }

  rangeDateValidator(minDate: number, maxDate: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const triggerYear = control.value;
      if (triggerYear >= minDate && triggerYear <= maxDate) {
        return null;
      }
      return { min: { minDate, maxDate } };
    };
  }

  isFieldInvalid(fieldName: string): boolean {
    const control = this.searchForm.get(fieldName);
    return this._isSubmited && !!control && control.invalid;
  }

  searchForm: FormGroup = this._fb.group({
    infos: this._fb.group(
      {
        id: [''],
        title: [''],
      },
      {
        validators: this.isRequiredValidator('title', 'id'),
      },
    ),
    type: [''],
    year: [
      '',
      [
        Validators.required,
        this.rangeDateValidator(this.minYear, this.maxYear),
      ],
    ],
    fiche: [{ value: 'Nancy', disabled: true }],
  });

  onSubmit() {
    console.log('Form submitted:', this.searchForm.value);
    this._isSubmited = true;
  }

  ngOnInit(): void {
    this.searchForm.get('fiche')?.patchValue(FicheTypesEnum.courte);
    this.searchForm.get('type')?.patchValue(MovieTypesEnum.Serie);
  }

  protected readonly MovieTypes = MovieTypesEnum;
}
