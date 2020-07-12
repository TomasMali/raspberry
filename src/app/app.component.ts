import { Component, OnInit } from '@angular/core';
import { JobsServiceService } from './jobs-service.service';
import { Job } from './job.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})





export class AppComponent implements OnInit {
  title = 'Raspberry';
  private jobSub: Subscription
  //
  private jobs: Job[] = []

  constructor(private JobsService: JobsServiceService) {
  }

  ngOnInit() {
    this.onClick();

    this.jobSub =  this.JobsService.getJobSubject().subscribe(()=>{
      this.onClick();
    })
  }

  ngOnDestroy() {
    this.jobSub.unsubscribe()
  }


  onClick() {
    this.JobsService.getJobs().subscribe(resultData => {
      this.jobs = resultData.response.sort((a, b) => a.name.localeCompare(b.name));
    }, err => {
    })
  }

  killProcess(pid: string) {
   // console.log(pid)
    this.JobsService.killJobs(pid)
  }

  restartProcess(pid: string) {
    this.JobsService.restartJobs(pid)
  }

}
