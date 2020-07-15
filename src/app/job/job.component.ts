import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Job } from '../job.model';
import { JobsServiceService } from '../jobs-service.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {




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
