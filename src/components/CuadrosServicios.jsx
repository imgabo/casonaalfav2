



const CuadrosServicios = ({logo, titulo, texto}) =>{
    return(
        <div className=" h-100 md:h-80 w-[320px] md:w-[450px] bg-[#CFEAE5] flex flex-col items-center rounded-lg gap-2">
                <img src={logo} alt={titulo} className="h-10 w-20 mt-10"/>
         
                <h1 className="text-2xl text-center font-semibold px-20 w-full">{titulo}</h1>
           
           
            <p className="w-full p-5">{texto}</p>

        </div>
    )
}

export default CuadrosServicios;