'use client';
import React from 'react';

export default function Footer() {
  return (
    <footer className="flex flex-row items-center justify-center bg-gray-200 w-screen py-1 border-t border-gray-300">
      <p className="text-black font-sans text-sm">
        <span
          className="hover:cursor-pointer"
          onClick={() => window.open('https://mhmmdvg.vercel.app/', '_blank')}
        >
          Muhammad Vikri
        </span>{' '}
        ∘ cmlabs pre-test
      </p>
    </footer>
  );
}