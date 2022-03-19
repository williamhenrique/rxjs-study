import { of, from, distinct } from 'rxjs';
import { distinctUntilChanged, distinctUntilKeyChanged } from 'rxjs/operators';

export default () => {
  const mixCaracters = [1, 1, 2, 2, 2, 3, 1, '3', 'a', 'A'];

  const distinctCaracters$ = from(mixCaracters).pipe(distinct());

  distinctCaracters$.subscribe(console.log);

  const caracters$ = from(mixCaracters).pipe(distinctUntilChanged());
  caracters$.subscribe(console.log);

  const user = [
    { name: 'William', loggedIn: false, token: null },
    { name: 'William', loggedIn: true, token: 'abc' },
    { name: 'William', loggedIn: true, token: '123' },
  ];

  const report$ = from(user).pipe(distinctUntilKeyChanged('loggedIn'));

  // report$.subscribe(console.log);

  const otherCaracters$ = from(user).pipe(
    distinctUntilChanged((prev, curr) => {
      return prev.name !== curr.name;
    })
  );

  otherCaracters$.subscribe(console.log);
};
