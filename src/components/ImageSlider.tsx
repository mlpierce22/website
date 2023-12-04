"use client"
import { Box } from "@chakra-ui/react"
import { useKeenSlider } from "keen-slider/react"
import { LazyMarkdownImage } from "./MarkdownImage"
import { StaticImageData } from "next/image"

type ImageSliderProps = {
    imageUrls: string[]
    images?: StaticImageData[]
    nextSlideSeconds?: number
}

const ImageSlider = ({ imageUrls, images, nextSlideSeconds }: ImageSliderProps) => {
    const [sliderRef] = useKeenSlider<HTMLDivElement>(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout: ReturnType<typeof setTimeout>
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, (nextSlideSeconds || 2) * 1000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )

    return (
        <>
            <Box as="div" ref={sliderRef} className="keen-slider">
                {(images ? images : imageUrls).map((imageUrl, index) => (
                    <Box as="div" className="keen-slider__slide" key={`${index}-slide`}>
                        <LazyMarkdownImage
                            src={imageUrl}
                            alt={`Slide ${index + 1}`}
                        />
                    </Box>
                ))}
            </Box>
        </>
    )
}

export default ImageSlider;


