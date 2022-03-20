import { interval } from 'rxjs';
import { mapTo, scan } from 'rxjs/operators';

interval(1000).pipe(
  mapTo(-1),
  scan((acc, cur) => {
    return acc + cur;
  }, 10)
);
