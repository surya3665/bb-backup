import Image, { type ImageProps } from "next/image";

type SplitImagePanelProps = {
  src: ImageProps["src"];
  alt: string;
  priority?: boolean;
  className?: string;
};

export function SplitImagePanel({
  src,
  alt,
  priority = false,
  className,
}: SplitImagePanelProps) {
  return (
    <div className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-full">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 1024px) 100vw, 50vw"
        className={`object-cover ${className ?? "object-center"}`}
      />
    </div>
  );
}
