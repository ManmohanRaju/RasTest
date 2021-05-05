import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PresTrustCoreService {

  constructor(
    private http : HttpClient
  ) { }

  getApplications(){
  return this.http.get('/assets/applications.json');
  }
}
