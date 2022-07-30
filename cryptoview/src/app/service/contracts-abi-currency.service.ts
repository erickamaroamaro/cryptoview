import { Injectable } from '@angular/core';
import { ethers } from "ethers";
import { WinRefService } from './win-ref.service';


@Injectable({
  providedIn: 'root'
})
export class ContractsAbiCurrencyService {

  constructor(private winRefService: WinRefService) { 

  }

  daiContract(){
    let provider;
    this.getProvider().then((data) => {
      provider = data;
      console.log('provider', provider);
    });
    const daiAddress = "dai.tokens.ethers.eth";
    // The ERC-20 Contract ABI, which is a common contract interface
    // for tokens (this is the Human-Readable ABI format)
    const daiAbi = [
      // Some details about the token
      "function name() view returns (string)",
      "function symbol() view returns (string)",
  
      // Get the account balance
      "function balanceOf(address) view returns (uint)",
  
      // Send some of your tokens to someone else
      "function transfer(address to, uint amount)",
  
      // An event triggered whenever anyone transfers to someone else
      "event Transfer(address indexed from, address indexed to, uint amount)"
    ];
  
    // The Contract object
    const daiContract = new ethers.Contract(daiAddress, daiAbi, provider);
  }

  async getProvider(){
    if (this.winRefService.window.ethereum){
      const provider = new ethers.providers.Web3Provider(this.winRefService.window.ethereum);
      return provider;
    } else {
      return "provider não encontrado";
    }
  }

}
