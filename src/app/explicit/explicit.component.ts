import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { JokesService } from '../jokes.service';

@Component({
  selector: 'app-explicit',
  templateUrl: './explicit.component.html',
  styleUrls: ['./explicit.component.css']
})
export class ExplicitComponent implements OnInit {
  jokes: string[] = [];
  private jokeSubscription: Subscription;
  ngOnDestroy(): void {
    this.jokeSubscription.unsubscribe();
  }

  constructor(private jokesService: JokesService) { }

  ngOnInit() {
    this.jokesService.setCategory('explicit');
    this.jokeSubscription = this.jokesService.activeJokes.subscribe(
      (jokes: string[]) =>{
        this.jokes = jokes;
      }
    );
  }

}
