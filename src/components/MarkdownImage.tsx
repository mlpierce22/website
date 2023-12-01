import dynamic from "next/dynamic";
import Image from "next/image";

type MarkdownImageProps = React.ComponentProps<typeof Image> & {
    caption?: string
}

export const LazyMarkdownImage = dynamic<MarkdownImageProps>(() => import('./MarkdownImage'))

const MarkdownImage = (props: MarkdownImageProps) => {
    return (
        <>
            <Image {...props} alt={props.alt} className="!m-0" />
            {props.caption &&
                <figcaption className="text-sm text-center">
                    {props.caption}
                </figcaption>
            }
        </>
    )

}

export default MarkdownImage;