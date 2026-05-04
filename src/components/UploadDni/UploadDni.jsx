import Button from "../Button/Button";
import Typography from "../Typography/Typography";  

export default function UploadDni(){
    return(
        <div className="flex flex-col items-center gap-2 justify-center bg-white max-w-full w-[370px] p-5 rounded-[0.5rem] h-[290px]">
            <Typography variant="h3">
                UploadDni
            </Typography>

            <div className="bg-very-light-gray h-[100px] rounded-[0.5rem] flex flex-col justify-center items-center w-full">
                <Typography variant="h3" className="mb-2">
                    Foto frontal del DNI
                </Typography>

                <Button className="bg-light-blue rounded-[0.5rem] !text-white">
                    <Typography variant="body" className="text-white">
                        Subir Dni
                    </Typography>
                </Button>
            </div>

            <div className="bg-very-light-gray h-[100px] rounded-[0.5rem] flex flex-col justify-center items-center w-full">
                <Typography variant="h3" className="mb-2">
                    Foto trasera del DNI
                </Typography>

                <Button className="bg-light-blue rounded-[0.5rem] !text-white">
                    <Typography variant="body" className="text-white">
                        Subir Dni
                    </Typography>
                </Button>
            </div>

        </div>
    )
}