import { Component, OnInit } from '@angular/core';
import { ethers } from "ethers";
import { WinRefService } from 'src/app/service/win-ref.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private winRefService: WinRefService) { 
  }

  ngOnInit(): void {
    this.getAccount();
    this.getCurrent();
  }

  async getAccount() {
    const provider = new ethers.providers.Web3Provider(this.winRefService.window.ethers);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner()
    console.log(signer);
  }

  async getCurrent(){
    const provider = new ethers.providers.Web3Provider(this.winRefService.window.ethers);
    var balance = await provider.getBalance("ethers.eth")
    ethers.utils.formatEther(balance)
    console.log(balance);

  }
}
