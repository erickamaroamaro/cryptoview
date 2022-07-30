import { Injectable } from '@angular/core';
import { ethers } from "ethers";
import { MetamaskIntegrationService } from './metamask-integration.service';
import { WinRefService } from './win-ref.service';


@Injectable({
  providedIn: 'root'
})
export class ContractsAbiCurrencyService {

  constructor(private metamaskIntegrationService: MetamaskIntegrationService) { 

  }

  async daiContract(){
    let provider;
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
    provider = this.metamaskIntegrationService.getProvider();
    const daiContract = new ethers.Contract(daiAddress, daiAbi, provider);
    let balance = await daiContract['balanceOf']("ricmoo.firefly.eth")

    console.log('balance', ethers.utils.formatUnits(balance, 2))
    console.log(daiContract);
  }

}
