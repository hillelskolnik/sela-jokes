import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { JokesService } from '../jokes.service';

@Component({
  selector: 'app-nerdy',
  templateUrl: './nerdy.component.html',
  styleUrls: ['./nerdy.component.css']
})
export class NerdyComponent implements OnInit {
  jokes: string[] = [];
  private jokeSubscription: Subscription;
  ngOnDestroy(): void {
    this.jokeSubscription.unsubscribe();
  }

  constructor(private jokesService: JokesService) { }

  ngOnInit() {
    this.jokesService.setCategory('nerdy');
    this.jokeSubscription = this.jokesService.activeJokes.subscribe(
      (jokes: string[]) =>{
        this.jokes = jokes;
      }
    );
  }

}
