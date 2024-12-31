'use client'

import React, { useEffect, useState } from 'react'

interface VideoPlayerProps {
  src: string
  token: string
}

export function VideoPlayer({ src, token }: VideoPlayerProps) {
  const [videoBlobUrl, setVideoBlobUrl] = useState<string | null>(null)

  useEffect(() => {
    let currentBlobUrl: string | null = null

    const fetchVideo = async () => {
      try {
        const response = await fetch(src, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        if (!response.ok) {
          throw new Error('Failed to fetch video')
        }

        const videoBlob = await response.blob()
        currentBlobUrl = URL.createObjectURL(videoBlob)
        setVideoBlobUrl(currentBlobUrl)
      } catch (error) {
        console.error('Error fetching video:', error)
      }
    }

    fetchVideo()

    return () => {
      // Revoga o Blob quando o componente é desmontado
      if (currentBlobUrl) {
        URL.revokeObjectURL(currentBlobUrl)
      }
    }
  }, [src, token])

  return (
    <div>
      {videoBlobUrl ? (
        <video
          controls
          style={{ width: '100%', maxHeight: '500px' }}
          src={videoBlobUrl}
        >
          Seu navegador não suporta o elemento de vídeo.
        </video>
      ) : (
        <p>Carregando vídeo...</p>
      )}
    </div>
  )
}
