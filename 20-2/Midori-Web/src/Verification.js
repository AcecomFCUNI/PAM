import { Return } from 'components';

export const isRegistered = (code) => {
  if (localStorage.getItem(code)) {
    return true;
  } else {
    return false;
  }
};
export const notRegistered = (code) => {
  if (localStorage.getItem('INVALID')) {
    return true;
  } else {
    return false;
  }
};
