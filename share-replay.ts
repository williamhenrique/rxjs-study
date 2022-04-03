import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMapTo, shareReplay } from 'rxjs/operators';

export default () => {
  const click$ = fromEvent(document, 'click');
  const ajax$ = ajax('https://api.github.com/users/octocat');

  const clickRequest$ = click$.pipe(mergeMapTo(ajax$), shareReplay(3, 10000));

  clickRequest$.subscribe(console.log);

  setInterval(() => {
    console.log('subs 1');
    clickRequest$.subscribe(console.log);
  }, 5000);
};
