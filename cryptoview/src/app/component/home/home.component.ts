import { Component, OnInit } from '@angular/core';
import { MetamaskIntegrationService } from 'src/app/service/metamask-integration.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private metaMaskIntegrationService: MetamaskIntegrationService) { 
  }

  ngOnInit(): void {
  }

  getAccount(){
    this.metaMaskIntegrationService.getAccount();
  }

  getCurrency() {
    this.metaMaskIntegrationService.getCurrent();
  }

}
