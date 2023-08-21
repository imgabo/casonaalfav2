import CuadrosServicios from "./CuadrosServicios";
import amplios from "../assets/svg/amplios.svg"
import especializado from "../assets/svg/especializado.svg"
import horas from "../assets/svg/24hours.svg"



const NuestroServicios = () => {

    return (
        <section className="w-full h-full mt-20 ">
            {/* titulo */}
            <div className="w-full flex items-center justify-center">
                <h1 className="text-5xl text-pine-green  font-semibold text-center"> NUESTROS SERVICIOS</h1>

            </div>
            {/* CUADRO DE SERVICIOS */}
            <div className="w-full  flex flex-col gap-8  xl:flex-row items-center justify-center md:justify-around p-10 ">
                <CuadrosServicios logo={especializado} titulo='PERSONAL 
                ESPECIALIZADO' texto='Con la capacidad de un grupo de profesionales de la Salud, quienes se encontraran preparados para la atención de nuestros residentes, con seguridad, respeto, cariño y empatía con los adultos mayores.' />
                <CuadrosServicios logo={amplios} titulo='AMPLIOS ESPACIOS' texto='Nuestros espacios serán un terreno de 5.000 mts2, de aproximadamente de 400 mts de construcción, que nos permitan tener amplios espacios acondicionados con rampas, pasamanos, señalética, que favorezcan la movilidad y traslados en forma segura para nuestros residentes.' />
                <CuadrosServicios logo={horas} titulo='ATENCIÓN 
LAS 24 HORAS' texto='Administración 24/7, entregando a nuestros adultos mayores la mayor calidad de vida, tanto física como psicológica.' />

            </div>
        </section>

    )
}

export default NuestroServicios;