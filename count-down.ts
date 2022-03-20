import { interval, startWith } from 'rxjs';
import { mapTo, retryWhen, scan, takeWhile } from 'rxjs/operators';

export default () => {
  interval(1000)
    .pipe(
      mapTo(-1),
      scan((acc, cur) => {
        return acc + cur;
      }, 10),
      takeWhile((value) => value > 0),
      startWith(5)
    )
    .subscribe(console.log);
};
