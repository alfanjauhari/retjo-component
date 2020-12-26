import React, { ReactNode } from 'react';
import './assets/app.css';

export default function Layout({ children }) {
  return <div className="px-20 py-10">{children}</div>;
}
