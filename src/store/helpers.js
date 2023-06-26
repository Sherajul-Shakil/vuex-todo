export function updateLocalStorage(items) {
    localStorage.setItem('items', JSON.stringify(items));
  }