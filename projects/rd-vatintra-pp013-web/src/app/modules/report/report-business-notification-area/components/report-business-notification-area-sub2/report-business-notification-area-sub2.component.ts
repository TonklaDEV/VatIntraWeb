import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-business-notification-area-sub2',
  templateUrl: './report-business-notification-area-sub2.component.html',
  styleUrls: ['./report-business-notification-area-sub2.component.scss']
})
export class ReportBusinessNotificationAreaSub2Component implements OnInit {
  setPage() {
    this.router.navigate(['/main/report/report-business-notification-area/page-one'])
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
