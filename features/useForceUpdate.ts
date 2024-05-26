import { useCallback, useState } from 'react';

export const useForceUpdate = () => {
  const [_, setForceUpdate] = useState(!0);

  const forceUpdate = useCallback(() => {
    setForceUpdate((forceUpdate) => !forceUpdate);
  }, []);

  return forceUpdate;
};
