import { from, fromEvent, interval, of } from 'rxjs';
export default () => {
  const observer = {
    next: (data) => {
      console.log(data);
    },
  };

  const frameworks = ['angular', 'vue', 'react'];

  of('https://api.github.com/users/williamhenrique').subscribe(observer);

  from(frameworks).subscribe(observer);

  fromEvent(document, 'keyup').subscribe(observer);

  interval(10000).subscribe(observer);
};
