import { MessageSquare } from 'lucide-react'

export default function ChatBubbleIcon({ onClick }) {
    return (
        <MessageSquare 
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 text-light-gray shrink-0 cursor-pointer hover:text-light-blue transition-colors ml-auto mr-1 sm:mr-2 md:mr-48"
            onClick={onClick}
        />
    )
}