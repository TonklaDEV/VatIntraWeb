import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-business-user-remove-sub2',
  templateUrl: './report-business-user-remove-sub2.component.html',
  styleUrls: ['./report-business-user-remove-sub2.component.scss'],
})
export class ReportBusinessUserRemoveSub2Component implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  setPage() {
    this.router.navigate(['/main/report/report-business-user-remove/page-one']);
  }
}
