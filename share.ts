import { interval } from 'rxjs';

export default () => {
  interval(1000).subscribe(console.log);
};
