// begin lesson code
import { of, fromEvent, from, interval } from 'rxjs';
import { map, pluck, mapTo, filter, take, tap } from 'rxjs/operators';

export default () => {
  // of(1, 2, 3, 4, 5, 6, 7, 8, 9)
  interval(1000)
    .pipe(
      map((value) => value + 10),
      filter((value) => value % 2 === 0),
      tap(console.log),
      take(10)
    )
    .subscribe(console.log);

  //for pluck

  const person$ = of({
    name: 'William',
    age: 30,
  });

  const subscriber$ = person$.pipe(map((event: any) => event.name));

  subscriber$.subscribe(console.log);

  const nameWithPluck$ = person$.pipe(pluck('name'));

  //mapTo

  nameWithPluck$.subscribe(console.log);

  const keyup$ = fromEvent(document, 'keyup');

  const pressed$ = keyup$.pipe(mapTo('Key Pressed!'));

  pressed$.subscribe(console.log);
};
