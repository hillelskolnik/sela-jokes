import { Component, OnInit } from '@angular/core';
import { JokesService } from '../jokes.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  selected: number = 5;
  isExpanded: boolean = false;
  constructor(private jokesService: JokesService) { }

  ngOnInit() {
    this.jokesService.setCount(this.selected);
  }

  selectOption(){
    this.jokesService.setCount(this.selected);
  }
  toggle(){
    this.isExpanded = !this.isExpanded;
  }

}
