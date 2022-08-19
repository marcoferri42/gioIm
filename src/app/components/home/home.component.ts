import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeDisplay = [
    {nome:'casa 1', imgSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.LqEkDCBjbdjt0ljOHVnUfQHaE8%26pid%3DApi&f=1', caption: '1'},
    {nome:'casa 2', imgSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.SK5s2IWsS--3mIr-AgCWfAHaE8%26pid%3DApi&f=1', caption: '2'},
    {nome:'casa 3', imgSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.lwxnksiNXd7tALZ8A7t-DwHaE8%26pid%3DApi&f=1', caption: '3'}
  ]

  constructor() {
  }

  ngOnInit(): void {

  }

}
