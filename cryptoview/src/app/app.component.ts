import { Component } from '@angular/core';
import { WinRefService } from './service/win-ref.service';

import { ethers } from "ethers";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cryptoview';
  constructor(private winRefService: WinRefService) { 
  }

  ngOnInit(): void {
    this.getAccount();
    this.getCurrent();
  }

  async getAccount() {
    if (this.winRefService.window.ethers){
      const provider = new ethers.providers.Web3Provider(this.winRefService.window.ethers);
      try{
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner()
        console.log(signer);
      } catch(error) {
        console.log(error);
      }
    }
  }

  async getCurrent(){
    if (this.winRefService.window.ethers){
      const provider = new ethers.providers.Web3Provider(this.winRefService.window.ethers);
      try{
        var balance = await provider.getBalance("ethers.eth")
        ethers.utils.formatEther(balance)
        console.log(balance);
      }catch(error){
        console.log(error);
      }
    }
  }
}
