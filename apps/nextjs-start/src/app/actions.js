/* eslint-disable no-unused-vars */

'use server'

import { getFirestore } from 'firebase/firestore'

import { addReviewToRestaurant } from '@/src/lib/firebase/firestore.js'
import { getAuthenticatedAppForUser } from '@/src/lib/firebase/serverApp.js'

// This is a Server Action
// https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions
// Replace the function below
export async function handleReviewFormSubmission(data) {}
