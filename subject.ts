import { delay, Subject } from 'rxjs';

export default () => {
  const subject = new Subject();
  subject.subscribe((one) => console.log({ one }));

  subject.next('Hello');

  // setTimeout(() => {
  //   subject.next('Hello');
  // }, 2000);

  subject.subscribe((two) => console.log({ two }));

  subject.next('my');

  subject.subscribe((three) => console.log({ three }));

  subject.next('name');

  subject.subscribe((four) => console.log({ four }));

  subject.next('is');

  subject.subscribe((five) => console.log({ five }));

  subject.next('Will');
};
