import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from './job.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsServiceService {

  getJob = "http://93.49.6.246:3030/jobs"     
  killJob = "http://93.49.6.246:3030/jobs/killpid/"   
  restartJob = "http://93.49.6.246:3030/jobs/restartjob/"
  
  private jobs: Job[] = []
  private jobSubject = new Subject()

  constructor(private http: HttpClient) { }


  getJobs() {
    return this.http.get<{ response: Job[] }>(this.getJob)
  }


getJobSubject(){
  return this.jobSubject.asObservable()
}

  killJobs(pid: string) {
    this.http.get<{ response: Job[] }>(this.killJob + pid)
      .subscribe(resultData => {
        this.jobSubject.next()
      }, err => {
      })
  }


  restartJobs(pid: string) {
    this.http.get<{ response: Job[] }>(this.restartJob + pid)
      .subscribe(resultData => {
        this.jobSubject.next()
      }, err => {
      })
  }





}
