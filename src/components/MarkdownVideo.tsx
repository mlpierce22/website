import React from "react"
import dynamic from 'next/dynamic'

type MarkdownVideoProps = {
    caption?: string
    src: string
}

export const LazyMarkdownVideo = dynamic<MarkdownVideoProps>(() => import('./MarkdownVideo'))

const MarkdownVideo = ({ src, caption }: MarkdownVideoProps) => {
    return (
        <>
            <video controls className="!mb-0 !w-full">
                <source src={src} type="video/mp4"></source>
                Your browser does not support the video tag.
            </video>
            {caption &&
                <figcaption className="text-sm text-center">
                    {caption}
                </figcaption>
            }
        </>
    )
}

export default MarkdownVideo;