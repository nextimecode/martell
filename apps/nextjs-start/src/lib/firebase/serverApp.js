/* eslint-disable no-unused-vars */

// enforces that this code can only be called on the server
// https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#keeping-server-only-code-out-of-the-client-environment
import 'server-only'

import { headers } from 'next/headers'

import { initializeServerApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

import { firebaseConfig } from './config'

export async function getAuthenticatedAppForUser() {
  throw new Error('not implemented')
}
