import React from 'react'

const VideoCard = ({ video }) => {
  return (
    <a
        href={`https://www.youtube.com/watch?v=${video.video?.videoId}`}
        target="_blank"
        rel="noreferrer"
    >
        <img src={video.video?.thumbnails[0].url} alt={video.video?.title} className="w-full object-cover" />
        <h3 className="mt-1 font-semibold">{video.video?.title}</h3>
    </a>
  )
}

export default VideoCard