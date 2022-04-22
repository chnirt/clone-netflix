import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { FaPlay } from 'react-icons/fa'

const image_base_url = 'https://image.tmdb.org/t/p/original'

const Banner = ({ data = [] }) => {
  const [banner, setBanner] = useState<any>(null)

  useEffect(() => {
    const fetchBanner = () => {
      setBanner(data[Math.floor(Math.random() * data.length)])
    }
    fetchBanner()
  }, [data])

  return (
    <div className="banner">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-full">
        {
          <Image
            className="object-cover"
            src={`${image_base_url}/${
              banner?.poster_path || banner?.backdrop_path
            }`}
            layout="fill"
            priority
          />
        }
      </div>
      <div className="flex max-w-xs flex-col justify-center md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        <h1 className="banner-title">
          {banner?.title || banner?.original_title}
        </h1>
        <p className="banner-overview">{banner?.overview}</p>
        <div className="mt-4 flex">
          <button className="mr-3 mb-3 flex items-center rounded bg-white py-2 pl-5 pr-6">
            <FaPlay className="text-black" size={21} />
            <div className="w-4" />
            <span className="text-black">Play</span>
          </button>
          <button className="mr-3 mb-3 flex items-center rounded bg-[#6d6d6e70] py-2 pl-5 pr-6">
            <AiOutlineInfoCircle size={25} />
            <div className="w-4" />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner
