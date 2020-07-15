import { Component, OnInit } from '@angular/core';
import { JobsServiceService } from '../jobs-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  temp = "0"

  constructor(private jobService: JobsServiceService) { }

  ngOnInit() {

     this.jobService.getTemp().subscribe(x => {
       this.temp = x.response
     })

  }


  restart(){


if(confirm("Confermi di Riavviare!"))
    this.jobService.restart().subscribe(x => {
      console.log(x.response)
    })
  }


  onClickSubmit(data) {
    console.log(data.emailid)
    this.jobService.deployJobs(data.emailid)
 }

}
