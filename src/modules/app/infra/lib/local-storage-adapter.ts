function set(key: string, value: string) {
  localStorage.setItem(key, value);
}

function get<T>(key: string) {
  const storage = localStorage.getItem(key);

  if (storage != null) {
    const parsedStorage = JSON.parse(storage) as T;
    return parsedStorage;
  }

  return null;
}

export const localStorageAdapter = {
  set,
  get,
};
