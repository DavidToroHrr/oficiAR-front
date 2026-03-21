import Button from "../Button/Button";

export default function UploadSelfie(){
    return(
        <div className="flex flex-col justify-center items-center bg-white max-w-full w-[370px] h-[290px] p-5 rounded-[0.5rem] ">
            <h3>Sube tu selfie</h3>

            <div className="bg-very-light-gray h-[200px] rounded-[0.5rem] flex flex-col justify-center items-center w-full">
                <svg 
                    className="w-8 h-8 text-gray-800 mb-2" 
                    aria-hidden="true" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24"
                >
                    <path 
                        stroke="currentColor" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M12 15V3m0 0L8 7m4-4 4 4M5 19h14a2 2 0 0 0 2-2v-1H3v1a2 2 0 0 0 2 2Z"
                    />
                </svg>

                <Button className="bg-light-blue rounded-[0.5rem]">Subir Selfie</Button>
            </div>
            
        </div>
    )
}