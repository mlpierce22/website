
type YTVideoProps = {
    embedUrl: string
}
const ResponsiveYTVideo = ({ embedUrl }: YTVideoProps) => {
    return (
        <div className="relative pb-[56.25%] h-0">
            <iframe src={embedUrl} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="absolute top-0 left-0 w-full h-full"></iframe>
        </div>
    )
}
export default ResponsiveYTVideo;