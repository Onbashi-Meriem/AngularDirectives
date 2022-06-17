import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularDirectives';
  status:boolean=false;
  itemList:{name:string, surname:string}[]=[
    {name:"Ayse", surname:"müller"},
    {name:"Ahmet", surname:"müller"},
    {name:"Ali", surname:"müller"},
  ]

  changeStatus(){
    this.status=!this.status
  }
}
