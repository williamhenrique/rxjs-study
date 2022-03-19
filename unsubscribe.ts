import { Observable } from 'rxjs';

export default () => {
  const observable = new Observable((subscriber) => {
    const set = setInterval(() => {
      subscriber.next('Success');
    }, 2000);

    return () => {
      console.log('Done');
      clearInterval(set);
    };
  });

  const observer = {
    next: (successParam) => {
      console.log('success', successParam);
    },
    error: (errorParam) => {
      console.log('error', errorParam);
    },
    complete: () => {
      console.log('complete');
    },
  };

  const subscription = observable.subscribe(observer);

  setTimeout(() => {
    subscription.unsubscribe();
  }, 10000);
};
