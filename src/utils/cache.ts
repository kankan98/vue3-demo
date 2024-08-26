class LocalCache {
  setCache(key: string, value: any, local: boolean = true) {
    if (local) {
      window.localStorage.setItem(key, JSON.stringify(value));
    } else {
      window.sessionStorage.setItem(key, JSON.stringify(value));
    }
  }

  getCache(key: string, local: boolean = true) {
    if (local) {
      const value = window.localStorage.getItem(key);
      return (
        value && value !== 'null' && value !== 'undefined' && JSON.parse(value)
      );
    } else {
      const value = window.sessionStorage.getItem(key);
      return (
        value && value !== 'null' && value !== 'undefined' && JSON.parse(value)
      );
    }
  }

  deleteCache(key: string, local: boolean = true) {
    if (local) {
      window.localStorage.removeItem(key);
    } else {
      window.sessionStorage.removeItem(key);
    }
  }

  clearCache() {
    window.localStorage.clear();
  }
}

export default new LocalCache();
