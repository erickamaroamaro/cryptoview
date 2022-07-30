import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ContractsAbiCurrencyService } from 'src/app/service/contracts-abi-currency.service';
import { MetamaskIntegrationService } from 'src/app/service/metamask-integration.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  address: String = "";
  constructor(private metaMaskIntegrationService: MetamaskIntegrationService, private contractsAbiCurrencyService: ContractsAbiCurrencyService) { 
  }

  ngOnInit(): void {

  }

  getAccount(){
    let promise = this.metaMaskIntegrationService.getAccount();
    promise.then((data) => {
      this.address = JSON.stringify(data);
      this.contractsAbiCurrencyService.daiContract();
    }, (error)=>{
      console.log(error);
    })

   }

  getCurrency() {
    this.metaMaskIntegrationService.getCurrent();
  }

}
