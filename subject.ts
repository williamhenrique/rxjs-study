import { delay, Subject } from 'rxjs';
import './style';
export default () => {
  const divLoading = document.createElement('div');

  divLoading.classList.add('loading');

  document.body.appendChild(divLoading);

  const loading$ = new Subject();

  const logicService = {
    showLoading: () => loading$.next(true),
    hideLoading: () => loading$.next(false),
    loading$: loading$.asObservable(),
  };

  logicService.loading$.subscribe((status) => {
    if (status) {
      divLoading.classList.add('loading');
    } else {
      divLoading.classList.remove('loading');
    }
  });

  logicService.showLoading();

  setTimeout(() => {
    logicService.hideLoading();
  }, 2000);
};
