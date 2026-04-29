import Typography from "../../components/Typography/Typography";

export default function SloganApp(){
    return(
        <div className="pt-20 text-center">
            {/* Variante para h1. El componente se encarga de los tamaños en PC y celular */}
            <Typography variant="h2">
                Soluciones <br/>
                <span className="text-light-blue">profesionales<br/></span> 
                para tu hogar<br/> 
                <span className="text-light-blue">al instante</span>
            </Typography>
        </div>
    )
}