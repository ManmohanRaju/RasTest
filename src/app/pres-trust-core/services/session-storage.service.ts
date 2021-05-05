import { BehaviorSubject, observable, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  private applications: BehaviorSubject<[]>;
  constructor(
    private http: HttpClient
  ) {
    this.applications = new BehaviorSubject<[]>([]);
    this.retriveApplicationJson();
  }

  setUser(userName: string) {
    sessionStorage.setItem("userName", userName);
  }
  getUser() {
    this.getApplicationsJson();
    this.getApplications();
    return sessionStorage.getItem("userName");

  }


  setApplications(applications: []) {
    sessionStorage.removeItem("applications");
    sessionStorage.setItem("applications", JSON.stringify(applications));
  }

  getApplicationsJson() {
    return this.http.get('/assets/json-data/applications.json');
  }

  retriveApplicationJson() {
    this.getApplicationsJson().subscribe((res: []) => {
      sessionStorage.setItem("applications", JSON.stringify(res));
      this.applications = new BehaviorSubject<[]>(res);

      this.setApplicationsSubject(res);
    })
  }

  getApplications() {
    if (sessionStorage.getItem("applications") != undefined) {
      return JSON.parse(sessionStorage.getItem("applications"));
    }
  }

  setApplicationsSubject(application) {
    this.applications.next(application);
  }

  getApplicationsSubject(): Observable<[]> {
    return this.applications.asObservable();
  }

  setUserId(userId) {
    sessionStorage.removeItem("userId");
    sessionStorage.setItem("userId", userId);
  }

  getUserId() {
    if (sessionStorage.getItem("userId") != undefined) {
     return sessionStorage.getItem("userId");
    }
  }

  logoutSession() {
    sessionStorage.removeItem("userName");
    sessionStorage.clear();
  }

}
