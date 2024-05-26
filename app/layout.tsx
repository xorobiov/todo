import type { Metadata } from 'next';
import './tailwind.css';

export const metadata: Metadata = {};

const Application: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <html lang="en_US" className="w-full h-full p-0 m-0">
      <body className="w-full h-full p-0 m-0">{props.children}</body>
    </html>
  );
};

export default Application;
