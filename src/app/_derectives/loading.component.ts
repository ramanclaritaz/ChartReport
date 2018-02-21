import { Component, Input } from "@angular/core";



@Component({
  selector:"app-loading",
  templateUrl:"loading.component.html"
})

export class loading{

@Input('loading') loading:boolean;

}
