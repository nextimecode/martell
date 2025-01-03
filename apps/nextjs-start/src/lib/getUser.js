'use client'

import { useEffect, useState } from 'react'

// import { useRouter } from 'next/navigation'

import { onAuthStateChanged } from 'firebase/auth'

import { auth } from '@/src/lib/firebase/clientApp.js'

export function useUser() {
  const [user, setUser] = useState()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authUser => {
      setUser(authUser)
    })

    return () => unsubscribe()
  }, [])

  return user
}
