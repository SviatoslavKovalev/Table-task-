import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './app-start-page.component.html',
  styleUrls: ['./app-start-page.component.scss']
})
export class AppStartPageComponent implements OnInit {
  isOpen: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
