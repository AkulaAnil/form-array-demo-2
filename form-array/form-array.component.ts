import { Component } from '@angular/core';
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

  constructor(private fb: FormBuilder){}
  ngOnInit() {
    this.myForm = this.fb.group({
      drp: [null, Validators.required],
      details: this.fb.array([])
    })
  }
  
  createData(data) {
    const roomObj = this.fb.group({
      name: [data, Validators.required],
      mobile: [null, Validators.required],
      email: [null, Validators.required],
    });    
    this.detailsData.push(roomObj);
  }

  get detailsData() {  
    return <FormArray>this.myForm.get('details');
  }
  
  addForm(val) {        
    if(val.length > 0){
      this.show = true;
      let ddata= this.detailsData
      val.forEach( element => {
        let index = ddata.controls.findIndex(x => x.value.name == element);
        if(index==-1){
          this.createData(element);
        }
      });
     
      let i=0;
      ddata.controls.forEach(data => {
        let index = val.findIndex(x => x == data.value.name);
        if (index == -1) {
          this.detailsData.removeAt(i);
        }
        i++;
      });
    }else {
      this.show = false;
      for (let i = 0; i < this.detailsData.controls.length; i++) {
        this.detailsData.removeAt(i);
      }
    }
  }


}





