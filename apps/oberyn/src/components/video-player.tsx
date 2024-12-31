// src/components/VideoPlayer.tsx
'use client'

import React from 'react'

interface VideoPlayerProps {
  src: string
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  return (
    <div>
      <video
        id="custom-video"
        style={{ width: '100%', maxHeight: '500px' }}
        disablePictureInPicture
        controlsList="nodownload"
      >
        <source src={src} type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
      <div style={{ marginTop: '10px' }}>
        <button
          onClick={() => {
            const video = document.getElementById(
              'custom-video'
            ) as HTMLVideoElement
            if (video) video.play()
          }}
        >
          Reproduzir
        </button>
        <button
          onClick={() => {
            const video = document.getElementById(
              'custom-video'
            ) as HTMLVideoElement
            if (video) video.pause()
          }}
        >
          Pausar
        </button>
      </div>
    </div>
  )
}
