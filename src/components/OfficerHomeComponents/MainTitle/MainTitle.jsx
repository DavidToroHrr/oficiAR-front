import Typography from "../../Typography/Typography";

export default function MainTitle({children}){
    return(
        // TÍTULO PRINCIPAL
        <Typography variant="h1" className="mb-8">
            {children}
        </Typography>
    )
}