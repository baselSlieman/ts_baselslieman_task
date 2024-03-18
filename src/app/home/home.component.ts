import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { HomeService } from '../home.service';
import {FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports:  [CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  address:any;
 // balance:any;
  constructor(public service:HomeService){}
  ngOnInit() {
    this.service.getLastBlockNumber();
    this.address="";
    
  }

  submit(){
   this.service.getBalance(this.address);
  }

  
  
}
