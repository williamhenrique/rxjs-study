import { Observable } from 'rxjs';

export default () => {
  const observable = new Observable((subscriber) => {
    subscriber.next('Hello world');
    subscriber.next('Hello world 2');

    setTimeout(() => {
      // subscriber.error('Meu Erro');
      subscriber.complete();
    }, 3000);
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

  observable.subscribe(observer);
};

// Open the console in the bottom right to see results.
