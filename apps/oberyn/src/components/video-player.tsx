'use client'

import React, { useEffect, useState } from 'react'

interface VideoPlayerProps {
  src: string
  token: string
}

export function VideoPlayer({ src, token }: VideoPlayerProps) {
  const [videoBlobUrl, setVideoBlobUrl] = useState<string | null>(null)

  useEffect(() => {
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
        const blobUrl = URL.createObjectURL(videoBlob)
        setVideoBlobUrl(blobUrl)

        // Liberar o Blob antigo, se houver
        return () => URL.revokeObjectURL(blobUrl)
      } catch (error) {
        console.error('Error fetching video:', error)
      }
    }

    fetchVideo()
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
