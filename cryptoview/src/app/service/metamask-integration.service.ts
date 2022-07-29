import { Injectable } from '@angular/core';
import { WinRefService } from './win-ref.service';
import { ethers } from "ethers";

@Injectable({
  providedIn: 'root'
})
export class MetamaskIntegrationService {

  constructor(private winRefService: WinRefService) { }

  async getAccount() {
    if (this.winRefService.window.ethereum){
      const provider = new ethers.providers.Web3Provider(this.winRefService.window.ethereum);
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
    if (this.winRefService.window.ethereum){
      const provider = new ethers.providers.Web3Provider(this.winRefService.window.ethereum);
      try{
        var balance = await provider.getBalance("ethers.eth")
        console.log(ethers.utils.formatEther(balance));
      }catch(error){
        console.log(error);
      }
    }
  }

}
