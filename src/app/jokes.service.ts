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
  error = new Subject<string>();
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
    var url = 'http://api.icndb.com/jokes/random/' + this.count;
    if (this.category !== '') {
      url += '?limitTo=[' + this.category + ']';
    }
    this.http.get<Jokes>(url).subscribe(jokes => {
      this.error.next('');
      this.isFetching.next(false);
      var jokesArr: string[] = [];
      jokes.value.forEach(element => {
        jokesArr.push(element.joke);
      });
      this.activeJokes.next(jokesArr);
    }, error => {
      this.error.next('error');
      this.isFetching.next(false);
      this.activeJokes.next([]);
    });
  }
}
