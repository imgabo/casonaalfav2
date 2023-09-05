



// eslint-disable-next-line react/prop-types
const CuadrosServicios = ({logo, titulo, texto}) =>{
    return(
        <div className=" h-100 md:h-80 w-full xl:w-[450px] bg-[#CFEAE5] flex flex-col items-center rounded-lg gap-2">
                <img src={logo} alt={titulo} className="h-10 w-full mt-10 "/>
         
                <h1 className="md:text-2xl text-center font-semibold px-20 w-full">{titulo}</h1>
           
           
            <p className="w-full p-5 text-lg lg:text-base">{texto}</p>

        </div>
    )
}

export default CuadrosServicios;