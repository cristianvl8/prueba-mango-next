import React from 'react';
import './page.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Link href="/exercise1" className="button">Exercise 1</Link>
      <Link href="/exercise2" className="button">Exercise 2</Link>
    </div>
  );
}
