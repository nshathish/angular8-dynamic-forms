import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Person } from '../models/person';
import { FormService } from '../../../core/services/form.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit, OnChanges {


  @Input() form: FormGroup;
  @Input() personalDetails: Person;

  constructor(
    private formService: FormService,
  ) { }

  ngOnInit() {
    if (this.personalDetails) {
      this.formService.patchForm(this.form, this.personalDetails);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
