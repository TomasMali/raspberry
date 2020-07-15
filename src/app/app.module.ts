import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { JobsServiceService } from './jobs-service.service';
import { AppRoutingModule } from './app-routing.module';
import { JobComponent } from './job/job.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { HomeComponent } from './home/home.component';
import { DeployComponent } from './deploy/deploy.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    JobComponent,
    AppHeaderComponent,
    HomeComponent,
    DeployComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [JobsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
