import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-aliases',
  templateUrl: './aliases.component.html',
  styleUrls: ['./aliases.component.scss']
})
export class AliasesComponent implements OnInit {

  @Input() form: FormGroup;

  get aliases(): FormArray {
    return this.form.get('aliases') as FormArray;
  }

  constructor() { }

  addAlias() {
    this.aliases.push(new FormControl(''));
  }

  ngOnInit() {
  }

}
