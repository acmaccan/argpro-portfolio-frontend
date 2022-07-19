import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: any;
  
  constructor(public portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.getUserData().subscribe(data => {
      console.log("Header component: ", data); // We recieve the complete object on the console
      this.user = data; // We recieve the data and store it in a variable
    })
  }
}
