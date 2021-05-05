import { SessionStorageService } from './../pres-trust-core/services/session-storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Injectable,OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OstfService implements OnInit {
  navLinks=[];
  linksArr=new BehaviorSubject([]);

  constructor(
    private http:HttpClient,
    private snackBar:MatSnackBar,
    private sessionService:SessionStorageService
  ) {
    // this.linksArr=new BehaviorSubject(this.navLinks);
  
  }
  ngOnInit(){
   
  }
   getNavLinks(){
     var userName =this.sessionService.getUser();
     return userName =="systemAdmin" ? this.http.get('/assets/json-data/navLinks1.json') : this.http.get('/assets/json-data/navLinks.json');
     
   
   }

   
   
}
