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
        const signer = provider.getSigner();
        // const sing = await provider.send({method: 'personal_sign', "params": ["Eu sou o dono da conta"]});
        const address = await signer.getAddress().valueOf();
        console.log(address);
        console.log(provider);
        return address;
      } catch(error) {
        console.log(error);
        return error
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
