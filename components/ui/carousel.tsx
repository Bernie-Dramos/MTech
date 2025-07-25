"use client"

import * as React from "react"
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react"
import type { EmblaOptionsType } from "embla-carousel"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type CarouselContextProps = {
  carouselRef: UseEmblaCarouselType[0]
  api: UseEmblaCarouselType[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
  orientation: "horizontal" | "vertical"
} & React.ComponentPropsWithoutRef<"div">

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

type CarouselProps = React.ComponentPropsWithoutRef<"div"> & {
  opts?: EmblaOptionsType
  orientation?: "horizontal" | "vertical"
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ opts, orientation = "horizontal", className, children, ...props }, ref) => {
    const [carouselRef, api] = useEmblaCarousel({
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    })
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    const onSelect = React.useCallback((api: any) => {
      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, [])

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev()
    }, [api])

    const scrollNext = React.useCallback(() => {
      api?.scrollNext()
    }, [api])

    React.useEffect(() => {
      if (!api) {
        return
      }

      onSelect(api)
      api.on("reInit", onSelect)
      api.on("select", onSelect)
    }, [api, onSelect])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
          orientation,
        }}
      >
        <div ref={ref} className={cn("relative", className)} role="region" aria-label="carousel" {...props}>
          {children}
        </div>
      </CarouselContext.Provider>
    )
  },
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<"div">>(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel()

    return (
      <div ref={carouselRef} className="overflow-hidden">
        <div
          ref={ref}
          className={cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className)}
          {...props}
        />
      </div>
    )
  },
)
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<"div">>(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel()

    return (
      <div
        ref={ref}
        role="group"
        aria-roledescription="slide"
        className={cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className)}
        {...props}
      />
    )
  },
)
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<typeof Button>>(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { scrollPrev, canScrollPrev } = useCarousel()

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn("absolute h-8 w-8 rounded-full", className)}
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        {...props}
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>
    )
  },
)
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<typeof Button>>(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { scrollNext, canScrollNext } = useCarousel()

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn("absolute h-8 w-8 rounded-full", className)}
        onClick={scrollNext}
        disabled={!canScrollNext}
        {...props}
      >
        <ArrowRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    )
  },
)
CarouselNext.displayName = "CarouselNext"

export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, useCarousel }
