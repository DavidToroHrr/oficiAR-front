export default function OfficerImage({ src, alt = "Officer" }) {
    return (
        <img 
            src={src} 
            alt={alt}
            className="w-[228px] h-[201px] rounded-[8px] object-cover shrink-0"
        />
    );
}