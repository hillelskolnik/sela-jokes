import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { JokesService } from '../jokes.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit, OnDestroy {
  jokes: string[] = [];
  private jokeSubscription: Subscription;
  ngOnDestroy(): void {
    this.jokeSubscription.unsubscribe();
  }

  constructor(private jokesService: JokesService) { }

  ngOnInit() {
    this.jokesService.setCategory('');
    this.jokeSubscription = this.jokesService.activeJokes.subscribe(
      (jokes: string[]) =>{
        this.jokes = jokes;
      }
    );
  }

}
