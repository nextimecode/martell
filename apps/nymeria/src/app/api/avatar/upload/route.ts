import { NextResponse } from 'next/server'

import { put } from '@vercel/blob'

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url)
    const filename = searchParams.get('filename')

    if (!filename) {
      return NextResponse.json(
        { error: 'Filename is required' },
        { status: 400 }
      )
    }

    if (!request.body) {
      return NextResponse.json(
        { error: 'Request body is missing' },
        { status: 400 }
      )
    }

    const blob = await put(filename as string, request.body, {
      access: 'public'
    })

    return NextResponse.json(blob)
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error occurred'

    return NextResponse.json(
      { error: 'Failed to process request', details: errorMessage },
      { status: 500 }
    )
  }
}
