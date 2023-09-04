import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "react-feather"

export default function Carousel({
  children: images = ["slider1.png", "slider2.png", "slider3.png"],
  autoSlide = true,
  autoSlideInterval = 7000,
}) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const prev = () =>
    setCurrentSlide((curr) => (curr === 0 ? images.length - 1 : curr - 1))
  const next = () =>
    setCurrentSlide((curr) => (curr === images.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])
  return (
    <div className="overflow-hidden relative w-[80vw] lg:w-auto mx-auto lg:mx-16 my-10">
      <div
        className="flex transition-transform ease-out duration-1000"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map(image => <img src={image} alt={image}/>)}
      </div>
      <div className="absolute flex inset-[-20px] items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full text-gray-800"
        >
          <ChevronLeft size={25} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full text-gray-800"
        >
        <ChevronRight size={25} />
        </button>
      </div>

      {/* <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {images.map((_, i) => (
            <div
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${currentSlide === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div> */}
    </div>
  )
}