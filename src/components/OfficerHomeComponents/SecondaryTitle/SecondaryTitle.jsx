import MainTitle from "../MainTitle/MainTitle";

export default function SecondaryTitle({children}){
    return(
        <div>
            <MainTitle>
                {children}
            </MainTitle>
        </div>
    )
}