import Button from "../Button/Button";

export default function UploadDni(){
    return(
        // Haz exactamente lo mismo aquí
<div className="flex flex-col items-center gap-2 justify-center bg-white max-w-full w-[370px] p-5 rounded-[0.5rem] h-[290px]">
            <h1>UploadDni</h1>

            <div className="bg-very-light-gray h-[100px] rounded-[0.5rem] flex flex-col justify-center items-center w-full">
                <h3 className="mb-2">Foto frontal del DNI</h3>

                <Button className="bg-light-blue rounded-[0.5rem]">Subir Dni</Button>
            </div>

            <div className="bg-very-light-gray h-[100px] rounded-[0.5rem] flex flex-col justify-center items-center w-full">
                <h3 className="mb-2">Foto trasera del DNI</h3>

                <Button className="bg-light-blue rounded-[0.5rem]">Subir Dni</Button>
            </div>

        </div>
    )
}