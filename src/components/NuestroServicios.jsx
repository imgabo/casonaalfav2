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
                ESPECIALIZADO' texto='Con la capacidad del grupo de 
                profesionales, quienes se encuentran
                preparados para la atención de 
                nuestros residentes, con seguridad,
                respeto, cariño y empatía con los 
                adultos mayores.' />
                <CuadrosServicios logo={amplios} titulo='AMPLIOS ESPACIOS' texto='Nuestros espacios de 5.000 mts2, en 
construcción de aproximadamente 
de 400 mts, nos permiten tener 
amplios espacios acondicionados 
con rampas, pasamanos, señalética, 
que favorecen la movilidad y 
traslados en forma segura para 
nuestros huéspedes.' />
                <CuadrosServicios logo={horas} titulo='ATENCIÓN 
LAS 24 HORAS' texto='Administración 24/7, de 
medicamentos, por parte de nuestro 
equipo de trabajo, quienes de forma 
permanente revisan la condición 
física, psicológica y ánimo de todos 
nuestros acogidos.' />

            </div>
        </section>

    )
}

export default NuestroServicios;