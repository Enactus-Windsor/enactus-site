import Image, { StaticImageData } from 'next/image';

type Props = { src: StaticImageData; priority?: boolean; overlay?: boolean; className?: string };

export default function Background({ src, priority, overlay, className }: Props) {
    return (
        <div className={`fixed inset-0 -z-10 ${className}`}>
            <Image
                src={src}
                alt=""
                fill
                sizes="100vw"
                priority={priority}
                className="object-cover blur-2xl scale-105"
                style={{ filter: 'blur(10px)' }}
            />
            {overlay && <div className="absolute inset-0 bg-black/65" />}
        </div>
    );
}
