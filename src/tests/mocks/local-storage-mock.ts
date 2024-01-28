function set(key: string, value: string) {
  window.localStorage.setItem(key, value);
}

function get<T>(key: string) {
  const storage = window.localStorage.getItem(key);

  if (storage != null) {
    const parsedStorage = JSON.parse(storage) as T;
    return parsedStorage;
  }

  return null;
}

function remove(key: string) {
  window.localStorage.removeItem(key);
}

export const localStorageMock = {
  set,
  get,
  remove,
};
