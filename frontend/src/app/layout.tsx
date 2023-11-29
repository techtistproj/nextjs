"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'
import { Provider } from 'react-redux';
import { Store } from './store/store';


const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={Store}>
            {children}
        </Provider>
        </body>
    </html>
  )
}
