import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day_13';

  eventInfo:any[] = [
    {eventId: 1, title: "Microsoft Azure Virtual Training Day: AI Fundamentals", date: "January 8, 2023", format: "Digital/ Online", time: "3:00 PM Pacific Time"},
    {eventId: 2, title: "Microsoft Azure Virtual Training Day: Cloud Native-Apps", date: "January 12, 2023", format: "Digital/ Online", time: "9:00 PM Pacific Time"},
    {eventId: 3, title: "DemocracyLab - Hacky New Year", date: "January 14, 2023", format: "Digital/ Online", time: "8:30 PM Pacific Time"}
    
  ]
}
