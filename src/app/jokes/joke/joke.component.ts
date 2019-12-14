import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
@Input() joke: string;
@Input() index: number;
  constructor() { }

  ngOnInit() {
  }

  getClass(){
    var mod =  this.index % 3;
    return 'mod'+ mod;
  }

}
