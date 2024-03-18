import { Injectable } from '@angular/core';
import Web3 from 'web3';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  lastBlockNumber!:String;

  balance:any;
  constructor() {
   
   }
   web3js =new Web3("https://mainnet.infura.io/v3/9b9ffabc118741939d2cd985ee299c3f");
   getLastBlockNumber(){

   
    this.web3js.eth.getBlockNumber().then(
      (res: any)=>{
      this.lastBlockNumber=res
      }
      );
  }

  getBalance(address:string){
    this.web3js.eth.getBalance(address).then( (wei: any) =>{
      this.balance ="Balance: " + this.web3js.utils.fromWei(wei, 'ether')+" ETH";
  }).catch((err) => { 
    this.balance ="please enter a valid address";
   
});;
  }


  
}
