import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import localForage from 'localforage';

type UseStorage<T> = [T, Dispatch<SetStateAction<T>>, (value: T) => Promise<T>];

export const useStorage = <T>(key: string, initialState: T): UseStorage<T> => {
  const [value, setValue] = useState<T>(initialState);

  useEffect(() => {
    localForage
      .getItem<T>(key)
      .then((valueOrNil) => setValue(valueOrNil ?? initialState));
  }, []);

  const writeAsync = (value: T) => {
    return localForage.setItem(key, value);
  };

  useEffect(() => {
    writeAsync(value);
  }, [value]);

  return [value, setValue, writeAsync];
};
