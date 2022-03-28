import { interval, map, share, take } from 'rxjs';

export default () => {
  const source$ = interval(1000).pipe(
    map((x: number) => {
      console.log('Processing: ', x);
      return x;
    }),
    share(),
    take(10)
  );

  source$.subscribe((x) => console.log('subscription 1: ', x));
  source$.subscribe((x) => console.log('subscription 2: ', x));
};
