import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { checkNumber, empDataExample, mdlarray } from '../Modules/empDataExample';
import { Router, ActivatedRoute, ParamMap} from '@angular/router'
@Component({
  selector: 'app-formcomponent',
  templateUrl: './formcomponent.component.html',
  styleUrls: ['./formcomponent.component.css']
})


export class FormcomponentComponent implements OnInit {
  public arr: any;
  public empDataExample : empDataExample = new empDataExample()
  public checkNumber : checkNumber=new checkNumber()
  public message: boolean=false
  userform = new FormGroup({
    id : new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("^[0-9]{1,10}")]),
    name : new FormControl("",[Validators.required,Validators.maxLength(10)]),
    email : new FormControl("",[Validators.required,Validators.email]),
  })
  constructor(private route: ActivatedRoute,) {
   }

  ngOnInit(): void {}


  // The bellow function fires for submit event and does the data binding.
  submit(){
    // let b=[{id:this.userform.controls.id.value,name:this.userform.controls.name.value,email:this.userform.controls.email.value}];
    // console.log(b)
    let arr : mdlarray = new mdlarray();
    //this.arr.push({id:this.id.value,name:this.name.value,email:this.name.value})
    arr.email = this.userform.controls.email.value
    arr.id = this.userform.controls.id.value;
    arr.name = this.userform.controls.name.value;
    this.empDataExample.array.push(arr)
    console.log(this.empDataExample.array)
    this.userform.controls.id.setValue("")
    this.userform.controls.name.setValue("")
    this.userform.controls.email.setValue("")
    console.log(typeof(this.empDataExample.array))
    localStorage.setItem("userDetails",JSON.stringify(this.empDataExample.array))
    sessionStorage.setItem("userSessionDetails",JSON.stringify(this.empDataExample.array))
  }


  edit(id: any){
      this.empDataExample.array.filter(id=>{
      this.userform.controls.id.setValue(id.id)
      this.userform.controls.name.setValue(id.name)
      this.userform.controls.email.setValue(id.email)
    })
    this.delete(id);
    // console.log(this.empDataExample.array)
    }



    delete(id:any){
      console.log(id)
      const index =this.empDataExample.array.findIndex(t=>t.id==id)
      console.log(index)
      if (index !== -1) this.empDataExample.array.splice(index, 1);
      console.log( this.empDataExample.array);
    }
  


  // The bellow function fires for keyup event and check for mobile number pattern
  check(){
    const pattern = /^[0-9]{1,10}/
    if(!pattern.test(this.userform.controls.id.value))
    {
      this.message = true
      this.checkNumber.message = this.message
      console.log(this.checkNumber.message)

    }
    else{
      this.message = false
      this.checkNumber.message = this.message
    }
  }
}
