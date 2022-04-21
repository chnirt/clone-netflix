import Image from 'next/image'
import React from 'react'

const image_base_url = 'https://image.tmdb.org/t/p/original'

const Thumbnail = ({ movie }: any) => {
  return (
    <div className="relative h-48 min-w-[30%] cursor-pointer transition duration-200 ease-out hover:scale-105 md:min-w-[25%] lg:min-w-[20%] xl:min-w-[15%]">
      {
        <Image
          className="rounded-sm object-cover"
          src={`${image_base_url}/${movie.poster_path || movie.backdrop_path}`}
          layout="fill"
          priority
        />
      }
    </div>
  )
}

export default Thumbnail
