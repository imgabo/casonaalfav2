




const CuadroHeader = ({ color, icono, texto }) => {
    const clase = `${color} text-white h-60 w-60  flex flex-col items-center gap-5 justify-center text-center p-6 font-semibold`
    return (

        <div className={clase}>

            <p className="text-sm lg:text-lg">{texto}</p>
            <img src={icono} alt={texto}  className="h-14 w-14"/>



        </div>
    )




}



export default CuadroHeader;