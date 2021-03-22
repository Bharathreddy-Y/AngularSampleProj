import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { AfterViewInit, Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap} from '@angular/router'

@Directive({
  selector: '[appCustomdirective]'
})
export class CustomdirectiveDirective implements OnInit{
  // @Input() minAmount:Number =0;
  constructor(private el: ElementRef,
    private _renderer: Renderer2,private route: ActivatedRoute,) {
      
     }
     ngOnInit(){
      this.view()
     }
  view(){
    console.log(this.el)
    console.log(this._renderer)
    const message = this._renderer.selectRootElement('#message');
    const errormessage = this._renderer.selectRootElement('#errormessage');
    this._renderer.listen(this.el.nativeElement,'keyup',()=>{
      let minAmount = 5000
      let maxAmount = 20000
      const amount = parseFloat(this.el.nativeElement.value)
      if(amount>minAmount)
      {
        if(amount<maxAmount)
        {
          message.innerText = amount
          errormessage.innerText=""
        }
        else{
          message.innerText = ""
          errormessage.innerText = "please enter the range between 5000 to 20000"
        }
      }
      else{
        message.innerText = ""
        errormessage.innerText = "please enter the range between 5000 to 20000"
      }
      
      
    });
  }
}
