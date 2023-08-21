
import birrous from "../assets/img/birrous.png"
import transceder from "../assets/img/transcender.png"
import proyecto from "../assets/img/proyecto.jpg"
import Boton from "./Boton"


const NuestroProyecto = () => {


    return (

        <section className="p-10 h-full w-full mb-20">
            <div className="flex flex-col md:flex-row items-center justify-center md:mt-20 ">
                <img src={birrous} alt="Birrous Logo" className="h-20 w-30" />
                <img src={transceder} alt="Birrous Logo" className="h-30 w-40" />
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between mt-10 gap-20  w-full h-full">
                <div className="h-full w-full">
                    <img src={proyecto} alt="casa descanso marinos" className="h-full w-full rounded-lg" />
                </div>

                <div className="  h-full w-full lg:w-[70%] flex flex-col justify-start items-center">
                    <div className="w-full ">
                        <h2 className="text-3xl font-semibold text-left text-zomp">NUESTRO</h2>
                        <h1 className=" text-4xl md:text-7xl font-semibold text-pine-green ">PROYECTO</h1>
                    </div>

                    <div className="w-full lg:pr-28 mt-4">
                        <p className="text-black text-justify font-semibold"><span className="text-primary">Casona Alfa </span>
                            es un proyecto sin fines de lucro
                            orientado a casas de reposo para adultos
                            mayores autofinanciado con recursos propios, aportes de privados, fundaciones y subvenciones del estado Chileno desarrollando a su vez nuestras propias actividades comerciales de acuerdo a nuestras capacidades.</p>
                    </div>
                   
                    <div className="w-full lg:pr-28 mt-4">
                        <p className="text-black text-justify font-semibold">Creada en el año 2019 por un grupo de personas pertenecientes a la Infantería de Marina de la Armada de Chile en calidad de retiro, quienes vieron la necesidad en la sociedad y especialmente de los adultos mayores ex integrantes de la Institución y cuyo fin último es brindar en el futuro una mejor calidad de vida.
                        </p>
                    </div>
                    <div className="mt-4 w-full lg:pr-28">
                        <Boton titulo='CONOCE LOS DETALLES >>' toLink={'/instalaciones'} />
                    </div>

                </div>


            </div>


        </section>
    )
}


export default NuestroProyecto;