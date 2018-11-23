class LocalStorage {
  constructor() {
    this.localStorage = window.localStorage;
  }

  get(key) {
    const value = this.localStorage.getItem(key);

    return value;
  }

  set(key, value) {
    return this.localStorage.setItem(key, value);
  }

  remove(key) {
    return this.localStorage.removeItem(key);
  }

  clear() {
    this.localStorage.clear();
  }
}

export default LocalStorage;
