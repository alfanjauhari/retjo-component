import { MouseEvent, PropsWithChildren } from 'react';
interface IButton {
    type?: 'button' | 'submit' | 'reset';
    onClick?: (event: MouseEvent) => void;
}
export default function Button({ type, onClick, children, }: PropsWithChildren<IButton>): JSX.Element;
export {};
