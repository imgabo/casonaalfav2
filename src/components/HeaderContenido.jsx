import Boton from "./Boton";
import CuadroHeader from "./CuadroHeader";
import Formulario from "./Formulario";
import pasion from "../assets/svg/pasion.svg"
import house from "../assets/svg/house.svg"
import tranquilidad from "../assets/svg/tranquilidad.svg"
import experience from "../assets/svg/experience.svg"
const HeaderContenido = () => {
    return (
        <>
            <div className=" h-80 w-full lg:mx-20  flex flex-col lg:flex-row items-center justify-between">
                <div className="w-full h-full flex items-start px-5 lg:px-0 lg:pl-24 flex-col ">
                    <h2 className="bg-gradient-to-r from-primary to-secondary rounded-xl p-2 text-white font-bold">Casa de Reposo</h2>
                    <h1 className="text-5xl sm:text-8xl lg:text-7xl text-gray-200 font-semibold">CASONA ALFA</h1>
                    <p className="text-xl lg:text-md text-white font-semibold mt-3 lg:pr-28 text-justify mb-7">Nuestro objetivo es entregar un servicio de la más alta calidad para nuestros adultos
                        mayores, otorgándo una mejor calidad de vida, dando comienzo a la mejor etapa de sus años tras un
                        merecido descanso.</p>
                    <div >
                        <Boton titulo='CONÓCENOS >>' toLink='#' />
                    </div>

                </div>
                <div className="hidden  w-full h-full  lg:flex items-center flex-col ">
                    <Formulario />
                </div>

            </div>
            <div className=" hidden absolute  w-full bottom-[-8vw] md:flex justify-center">
                <CuadroHeader texto='PASIÓN POR LAS PERSONAS' icono= {pasion} color='bg-primary' />
                <CuadroHeader texto='HOGAR ACOGEDOR Y ÚNICO' icono={house} color='bg-zomp' />
                <CuadroHeader texto='TRANQUILIDAD Y ARMONÍA' icono={tranquilidad} color='bg-pine-green' />
                <CuadroHeader texto='EXPERIENCIA Y COMPROMISO' icono={experience} color='bg-secondary' />
            </div>
            
        </>
    )
}


export default HeaderContenido;