'use client';

import type { FC, KeyboardEventHandler } from 'react';
import classNames from 'classnames';

interface Props {
  onChange: (value: string) => void;
}

export const Input: FC<Props> = (props) => {
  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key != 'Enter') {
      return;
    }
    props.onChange(e.currentTarget.value);
    e.currentTarget.value = '';
  };

  return (
    <input
      placeholder="Nothing will work unless you do…"
      className="p-4 bg-gray-100 border border-gray-100 rounded-xl outline-none focus:bg-white -placeholder-shown:bg-white transition-all duration-150"
      onKeyDown={onKeyDown}
    />
  );
};
