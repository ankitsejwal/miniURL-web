'use client';

import React from 'react';
import Header from '../UI/Header';
import Button from '../UI/Button';
import { useRouter } from 'next/navigation';

export default function Links() {
  const router = useRouter();
  return (
    <div className="p-14 flex flex-col space-y-6">
      <Header />
      <main>All the links goes here:</main>
      <Button name="Go to Home" onClick={() => router.push('/')} />
    </div>
  );
}
