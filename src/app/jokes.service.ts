import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

interface Joke{
  id: number;
  joke: string;
  categories: string[];
}

interface Jokes{
  type: string;
  value: Joke[];
}

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  activeJokes = new Subject<string[]>();
  isFetching = new Subject<boolean>();
  error = new Subject<boolean>();
  private count: number;
  private category: string = "";

  setCategory(category: string){
    this.category = category;
    this.getJokes();
  }

  setCount(count: number){
    this.count = count;
    this.getJokes();
  }

  constructor(private http: HttpClient) { }

  private getJokes(){
    this.isFetching.next(true);
    var url = 'http://api.icndb.com/jokes/random/' + this.count
    + '?escape=javascript';
    if (this.category !== '') {
      url += '&limitTo=[' + this.category + ']';
    }
    this.http.get<Jokes>(url).subscribe(jokes => {
      this.error.next(false);
      this.isFetching.next(false);
      var jokesArr: string[] = [];
      jokes.value.forEach(element => {
        jokesArr.push(element.joke);
      });
      this.activeJokes.next(jokesArr);
    }, error => {
      console.log(error);
      this.error.next(true);
      this.isFetching.next(false);
      this.activeJokes.next([]);
    });
  }
}
