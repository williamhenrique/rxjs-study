import { interval, map, share } from 'rxjs';

export default () => {
  const source$ = interval(1000).pipe(
    map((x: number) => {
      console.log('Processing: ', x);
      return x * x;
    }),
    share()
  );

  source$.subscribe((x) => console.log('subscription 1: ', x));
  source$.subscribe((x) => console.log('subscription 1: ', x));
};
