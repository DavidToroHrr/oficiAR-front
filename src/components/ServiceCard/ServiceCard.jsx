import OfficerImage from "../OfficerImage/OfficerImage";

export default function ServiceCard({ imageSrc, imageAlt }) {
    return (
        <div className="w-full bg-white rounded-[8px] shadow-sm min-h-[230px] flex items-start pl-6 pt-4 pb-4">
            <OfficerImage src={imageSrc} alt={imageAlt} />
        </div>
    );
}