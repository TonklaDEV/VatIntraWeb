import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-business-not-transfer-sub2',
  templateUrl: './report-business-not-transfer-sub2.component.html',
  styleUrls: ['./report-business-not-transfer-sub2.component.scss']
})
export class ReportBusinessNotTransferSub2Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  setPage(){
    this.router.navigate(['/main/report/report-business-not-transfer/page-one'])
  }
}
