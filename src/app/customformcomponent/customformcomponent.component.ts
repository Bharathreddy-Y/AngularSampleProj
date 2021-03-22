import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { customDataExample, MatNumber } from '../Modules/customDataExample';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-customformcomponent',
  templateUrl: './customformcomponent.component.html',
  styleUrls: ['./customformcomponent.component.css']
})
export class CustomformcomponentComponent implements OnInit {
  public Volume : MatNumber = new MatNumber()
  constructor(private route: ActivatedRoute,) { }

  ngOnInit(): void {
  }
  slider(event:any)
  {
    console.log(typeof(event.value))
    this.Volume.vol = event.value
    console.log((this.Volume.vol))
    console.log(typeof(this.Volume.vol))
  }
}
