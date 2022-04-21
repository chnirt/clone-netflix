import React, { useCallback, useRef } from 'react'
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc'
import Thumbnail from './Thumbnail'

const Row = ({ title, movies }: any) => {
  const rowRef = useRef<HTMLDivElement | null>(null)
  const handleSelect = useCallback((direction: string) => {
    console.log('hello')
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current
      const left =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth
      rowRef.current.scrollTo({ left, behavior: 'smooth' })
    }
  }, [])
  const handleLeft = useCallback(() => handleSelect('left'), [])
  const handleRight = useCallback(() => handleSelect('right'), [])
  return (
    <div>
      <div className="mb-2 px-12">
        <h1 className="movie-row-title">{title}</h1>
      </div>

      <div className="group relative flex">
        <div
          ref={rowRef}
          className="flex w-full items-center space-x-1 overflow-y-hidden overflow-x-scroll px-12 scrollbar-hide"
        >
          {movies.length &&
            movies.map((movie: any, mi: any) => (
              <Thumbnail key={`thumbnail-${mi}`} movie={movie} />
            ))}
        </div>

        <button
          className="absolute left-0 flex h-full w-12 items-center opacity-0 transition duration-200 hover:bg-[#14141450] group-hover:opacity-100"
          onClick={handleLeft}
        >
          <VscChevronLeft className="transition hover:scale-125" size={46} />
        </button>

        <button
          className="absolute right-0 flex h-full w-12 items-center opacity-0 transition duration-200 hover:bg-[#14141450] group-hover:opacity-100"
          onClick={handleRight}
        >
          <VscChevronRight className="transition hover:scale-125" size={46} />
        </button>
      </div>
    </div>
  )
}

export default Row
