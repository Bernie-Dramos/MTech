import Image, { type ImageProps } from "next/image"

interface SeoOptimizedImageProps extends ImageProps {
  alt: string
}

export default function SeoOptimizedImage(props: SeoOptimizedImageProps) {
  return <Image {...props} alt={props.alt} />
}
