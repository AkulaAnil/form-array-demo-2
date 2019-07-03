import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent  {


  myForm: FormGroup;
  dataValues = ['One', 'Two', 'Three'];
  show = false;
  
  constructor(private fb: FormBuilder) { }
  
  ngOnInit() {
    this.myForm = this.fb.group({
      drp: '',
      details: this.fb.array([])
    })
  }
  
  get detailsData() {
    return this.myForm.get('details') as FormArray
  }
  
  addForm() {
    const newData = this.fb.group({ 
      name: [],
      mobile: [],
      email: [],
    })
    this.detailsData.push(newData);
    this.show = true;
  }
  
  deletePhone(i) {
    this.detailsData.removeAt(i)
  }


}
