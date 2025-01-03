/* eslint-disable no-unused-vars */

'use client'

import React, { useState, useEffect } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

import {
  signInWithGoogle,
  signOut,
  onAuthStateChanged
} from '@/src/lib/firebase/auth.js'
import { firebaseConfig } from '@/src/lib/firebase/config'
import { addFakeRestaurantsAndReviews } from '@/src/lib/firebase/firestore.js'

function useUserSession(initialUser) {
  return
}

export default function Header({ initialUser }) {
  const user = useUserSession(initialUser)

  const handleSignOut = event => {
    event.preventDefault()
    signOut()
  }

  const handleSignIn = event => {
    event.preventDefault()
    signInWithGoogle()
  }

  return (
    <header>
      <Link href="/" className="logo">
        <img src="/friendly-eats.svg" alt="FriendlyEats" />
        Friendly Eats
      </Link>
      {user ? (
        <>
          <div className="profile">
            <p>
              <img
                className="profileImage"
                src={user.photoURL || '/profile.svg'}
                alt={user.email}
              />
              {user.displayName}
            </p>

            <div className="menu">
              ...
              <ul>
                <li>{user.displayName}</li>

                <li>
                  <a href="#" onClick={addFakeRestaurantsAndReviews}>
                    Add sample restaurants
                  </a>
                </li>

                <li>
                  <a href="#" onClick={handleSignOut}>
                    Sign Out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </>
      ) : (
        <div className="profile">
          <a href="#" onClick={handleSignIn}>
            <img src="/profile.svg" alt="A placeholder user image" />
            Sign In with Google
          </a>
        </div>
      )}
    </header>
  )
}
