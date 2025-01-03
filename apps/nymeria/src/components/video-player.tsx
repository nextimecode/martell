'use client'

import React, { useEffect, useState } from 'react'

interface VideoPlayerProps {
  src: string
  token: string
}

export function VideoPlayer({ src, token }: VideoPlayerProps) {
  const [videoUrl, setVideoUrl] = useState<string | null>(null)

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch(src, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        if (!response.ok) {
          throw new Error(`Failed to fetch video: ${response.statusText}`)
        }

        setVideoUrl(URL.createObjectURL(await response.blob()))
      } catch {}
    }

    fetchVideo()
  }, [src, token])

  if (!videoUrl) {
    return <p>Loading video...</p>
  }

  return (
    <div>
      <video
        controls
        style={{ width: '100%', maxHeight: '500px' }}
        src={videoUrl}
        autoPlay
        preload="auto"
      >
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </div>
  )
}
