const xhr = new XMLHttpRequest();
xhr.responseType = 'blob';
xhr.onload = (event) => {
  const blob = xhr.response;
};
xhr.open('GET', url);
xhr.send();