import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-business-gold-receive-sub2',
  templateUrl: './report-business-gold-receive-sub2.component.html',
  styleUrls: ['./report-business-gold-receive-sub2.component.scss']
})
export class ReportBusinessGoldReceiveSub2Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  setPage(){
    this.router.navigate(["/main/report/report-business-gold-receive/page-one"])
  }

}
