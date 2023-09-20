import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css'],
})
export class SearchMoviesComponent implements OnInit {
  private fb = inject(FormBuilder);

  types: string[] = ['film', 'série', 'épisode'];
  fiches: string[] = ['complète', 'courte'];

  searchForm: FormGroup = this.fb.group({
    id: this.fb.group({
      identifier: [''],
      title: ['', Validators.required],
    }),
    type: ['série'],
    year: [null],
    description: [''],
  });

  onSubmit() {
    if (this.searchForm.valid) {
      console.log('Form submitted:', this.searchForm.value);
    }
  }

  ngOnInit(): void {
    this.searchForm.get('description')?.patchValue('courte');
  }
}
