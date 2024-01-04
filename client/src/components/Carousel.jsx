import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, PrevButton, NextButton } from "./EmblaCarouselArrowsDotsButtons";
import dog1 from '../assets/carousel-1.jpg';
import dog2 from '../assets/carousel-2.jpg';
import dog3 from '../assets/carousel-3.jpg';
import dog4 from '../assets/carousel-4.jpg';
import dog5 from '../assets/carousel-5.jpg';

const slides = [
  { url: dog1, alt: "Description for Image 1" },
  { url: dog2, alt: "Description for Image 2" },
  { url: dog3, alt: "Description for Image 3" },
  { url: dog4, alt: "Description for Image 4" },
  { url: dog5, alt: "Description for Image 5" },
];

const Carousel = ({ options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(index => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onInit = useCallback(api => {
    setScrollSnaps(api.scrollSnapList());
    setPrevBtnDisabled(!api.canScrollPrev());
    setNextBtnDisabled(!api.canScrollNext());
  }, []);

  const onSelect = useCallback(api => {
    setSelectedIndex(api.selectedScrollSnap());
    setPrevBtnDisabled(!api.canScrollPrev());
    setNextBtnDisabled(!api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("reInit", onInit);
      emblaApi.off("reInit", onSelect);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className="pt-8 px-4 sm:px-10">
      <div className="overflow-x-auto" ref={emblaRef}>
        <div className="flex w-auto gap-4 sm:gap-10">
          {slides.map((slide, index) => (
            <div className="flex-none w-full sm:w-1/4" key={index}>
              <img className="rounded-lg w-full max-w-xs object-contain" src={slide.url} alt={slide.alt} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
        <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
      </div>

      <div className="flex justify-center mt-2">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => scrollTo(index)}
            className={`mx-1 ${index === selectedIndex ? "bg-blue-500" : "bg-gray-300"}`}
            style={{ height: "20px", width: "20px" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
