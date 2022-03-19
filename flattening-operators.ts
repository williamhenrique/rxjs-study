import { catchError, EMPTY, forkJoin, from, fromEvent, map, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeAll, mergeMap, pluck, tap, toArray } from 'rxjs/operators';

export default () => {
  const textInput = document.getElementById('sample-input');
  const input$ = fromEvent(textInput, 'keyup');

  input$
    .pipe(
      map((event) => {
        let value = event.target['value'];

        //problem in our example context
        if (value === '') {
          return EMPTY;
        }

        return getPeople(value);
      }),
      mergeAll()
    )
    .subscribe(console.log);

  const users$ = getPeople(1);
  users$
    .pipe(
      mergeMap((people) => {
        return getFilms(1).pipe(
          map((films) => {
            return {
              films,
              people,
            };
          })
        );
      })
    )
    .subscribe((a) => console.log({ a }));

  const user404NotFound$ = getPeople(100);
  user404NotFound$
    .pipe(
      catchError(() => {
        return getPeople(1);
        //return [{ status: 404 }];
      })
    )
    .subscribe(console.log);

  forkJoin([getPeople(1), getPeople(2), getPeople(3)]).subscribe(console.log);

  function getPeople(id) {
    return ajax.getJSON(`https://swapi.dev/api/people/${id}`);
  }

  function getFilms(id) {
    return ajax.getJSON(`https://swapi.dev/api/films/${id}`);
  }
};
