import { BehaviorSubject } from 'rxjs';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OstfManagePrgService implements OnInit {
cardData  = new BehaviorSubject([]);
cardArr=[];
  constructor() {
   this.cardArr= [
{
title:'Save the Date',
content:'Lorem ipsum is the simply dummy content,Lorem ipsum is the simply dummy content,Lorem ipsum is the simply dummy content,Lorem ipsum is the simply dummy content'
},
{
  title:'Site Visit Details',
content:'Lorem ipsum is the simply dummy content,Lorem ipsum is the simply dummy content,Lorem ipsum is the simply dummy content,Lorem ipsum is the simply dummy content'

  },
  {
    title:'Changing Status from Community review to freeholder',
  content:'Lorem ipsum is the simply dummy content,Lorem ipsum is the simply dummy content,Lorem ipsum is the simply dummy content,Lorem ipsum is the simply dummy content'
  
    },
    {
      title:'Final Presentation Email',
    content:'Lorem ipsum is the simply dummy content,Lorem ipsum is the simply dummy content,Lorem ipsum is the simply dummy content,Lorem ipsum is the simply dummy content'
    
      },
      {
        title:'Feedback Email ',
      content:'Lorem ipsum is the simply dummy content,Lorem ipsum is the simply dummy content,Lorem ipsum is the simply dummy content,Lorem ipsum is the simply dummy content'
      
        },
        {
          title:'Withdrawal Email',
        content:'Lorem ipsum is the simply dummy content,Lorem ipsum is the simply dummy content,Lorem ipsum is the simply dummy content,Lorem ipsum is the simply dummy content'
        
          },
   ] 
this.cardData  = new BehaviorSubject(this.cardArr);
   
   }
  ngOnInit(){

  }
  setData(data){
    this.cardData.next(data);
  }
  getData(){
    return this.cardData.asObservable();
  }
}
