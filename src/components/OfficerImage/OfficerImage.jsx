export default function OfficerImage({ src, alt = "Officer" }) {
    return (
        <img 
            src={src} 
            alt={alt}
            className="w-24 h-24 md:w-[228px] md:h-[201px] rounded-[8px] object-cover shrink-0"
        />
    );
}