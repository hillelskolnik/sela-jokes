import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { JokesService } from '../jokes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit, OnDestroy{
  @Input() jokes: string[] = [];
  isFetching: boolean = true;
  isError: boolean = false;
  private isFetchingSubscription: Subscription;
  private isErrorSubscription: Subscription;

  constructor(private jokeService: JokesService) { }

  ngOnInit() {
    this.isFetchingSubscription = 
    this.jokeService.isFetching.subscribe(isFetching =>{      
      this.isFetching = isFetching;
    });

    this.isErrorSubscription = 
    this.jokeService.error.subscribe(error =>{      
      this.isError = error;
    });
  }

  ngOnDestroy(): void {
    this.isFetchingSubscription.unsubscribe();
    this.isErrorSubscription.unsubscribe();
  }

}
