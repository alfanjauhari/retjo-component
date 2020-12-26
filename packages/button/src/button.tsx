import React, { MouseEvent, PropsWithChildren } from 'react';
import tw from 'twin.macro';

interface IButton {
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: MouseEvent) => void;
}

const BtnStyle = tw.button`px-8 py-3 rounded bg-black text-white text-center`;

export default function Button({
  type,
  onClick,
  children,
}: PropsWithChildren<IButton>) {
  return (
    <BtnStyle type={type} onClick={onClick}>
      {children}
    </BtnStyle>
  );
}
