/* eslint-disable no-undef */
import { env } from '@/env'

export function api(path: string, init?: RequestInit) {
  const baseUrl =
    process.env.NEXT_PUBLIC_API_URL || `https://${process.env.VERCEL_URL}`
  const apiPrefix = '/api'
  const url = new URL(apiPrefix.concat(path), baseUrl)

  return fetch(url, init)
}
