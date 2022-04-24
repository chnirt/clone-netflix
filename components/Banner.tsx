import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { FaPlay } from 'react-icons/fa'

const image_base_url = 'https://image.tmdb.org/t/p/original'

const Banner = ({ data = [] }) => {
  const [banner, setBanner] = useState<any>(null)

  useEffect(() => {
    const fetchBanner = () => {
      setBanner(data[Math.floor(Math.random() * data.length - 1)])
    }
    fetchBanner()
  }, [data])

  return (
    <div className="banner">
      <img
        className="absolute left-0 top-0 right-0 -z-10 h-[80vh] w-[100vw] object-cover"
        src={
          banner?.poster_path || banner?.backdrop_path
            ? `${image_base_url}/${
                banner?.poster_path || banner?.backdrop_path
              }`
            : 'none'
        }
      />
      <div className="flex h-[80vh] max-w-xs flex-col justify-center md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        <h1 className="banner-title line-clamp-2">
          {banner?.title || banner?.original_title}
        </h1>
        <p className="banner-overview line-clamp-4">{banner?.overview}</p>
        <div className="mt-4 flex">
          <button className="banner-button bg-white hover:bg-white/75">
            <FaPlay className="text-black" size={21} />
            <div className="w-4" />
            <span className="banner-button-text text-black">Play</span>
          </button>
          <button className="banner-button bg-[#6d6d6e]/40 hover:bg-[#6d6d6e]/70">
            <AiOutlineInfoCircle size={25} />
            <div className="w-4" />
            <span className="banner-button-text">More Info</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner
