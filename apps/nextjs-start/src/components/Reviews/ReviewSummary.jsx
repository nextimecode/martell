/* eslint-disable no-unused-vars */

import { GoogleGenerativeAI } from '@google/generative-ai'
import { getFirestore } from 'firebase/firestore'

import { getReviewsByRestaurantId } from '@/src/lib/firebase/firestore.js'
import { getAuthenticatedAppForUser } from '@/src/lib/firebase/serverApp'

export async function GeminiSummary({ restaurantId }) {
  return (
    <div className="restaurant__review_summary">
      <p>TODO: summarize reviews</p>
    </div>
  )
}

export function GeminiSummarySkeleton() {
  return (
    <div className="restaurant__review_summary">
      <p>✨ Summarizing reviews with Gemini...</p>
    </div>
  )
}
