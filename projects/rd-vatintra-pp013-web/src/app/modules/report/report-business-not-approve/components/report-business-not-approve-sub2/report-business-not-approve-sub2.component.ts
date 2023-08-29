import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-business-not-approve-sub2',
  templateUrl: './report-business-not-approve-sub2.component.html',
  styleUrls: ['./report-business-not-approve-sub2.component.scss']
})
export class ReportBusinessNotApproveSub2Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  backPage(){
    this.router.navigate(['/main/report/report-business-not-approve/page-one'])
  }
}
