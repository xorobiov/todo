import type { FC } from 'react';
import { MdCheck } from 'react-icons/md';
import classNames from 'classnames';

interface Props {
  value: boolean;
  onChange: (value: boolean) => void;
}

export const Checkbox: FC<Props> = (props) => {
  const onClick = () => {
    props.onChange(!props.value);
  };

  return (
    <div
      role="checkbox"
      className={classNames(
        'flex items-center justify-center w-5 h-5 rounded-md shrink-0',
        props.value ? 'bg-blue-600' : 'bg-gray-200'
      )}
      onClick={onClick}
    >
      {props.value && <MdCheck className="text-white text-md wght-500" />}
    </div>
  );
};
