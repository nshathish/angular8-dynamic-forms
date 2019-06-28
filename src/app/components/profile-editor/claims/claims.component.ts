import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.scss']
})
export class ClaimsComponent implements OnInit {

  @Input() form: FormGroup;

  get claims(): FormArray {
    return this.form.get('claims') as FormArray;
  }

  constructor(
    private fb: FormBuilder
  ) { }

  addClaim() {
    this.claims.push(this.fb.group({
      date: '',
      claimType: ''
    }));
    console.log(this.form);
  }

  ngOnInit() {
  }

}
