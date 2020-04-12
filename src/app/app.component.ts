import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'If - For  - Switch -attribute - event ';
  sideEffect:number
  user=null
  user1=[
    {name:"amar",gender:"m"},
    {name:"nivi",gender:"f"},
    {name:"nivi",gender:"p"}
  ]
  user2=[
    {name:"nivi",gender:"f"},
    {name:"amar",gender:"m"},
    {name:"nivi",gender:"p"}
  ]

  constructor( 
   ) {
   this.user=this.user1;
   }

  ngOnInit():void {

    
    }
    sideEffectChange(){
     return this.sideEffect=Math.random();
    }
    checkClick(){
      this.value={id:Math.random().toString(),title:"king",description:"amar"};
     this.user= this.user[0].name === this.user1[0].name?this.user2:this.user1;
    }
    fn(index,users){
      return users.gender;
    }
}
