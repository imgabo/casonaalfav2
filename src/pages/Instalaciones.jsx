import Navbar from "../components/Navbar";
import proyecto1 from "../assets/img/proyecto1.jpg"
import proyecto2 from "../assets/img/proyecto2.jpg"
import proyecto3 from "../assets/img/proyecto3.jpg"
import proyecto4 from "../assets/img/proyecto4.jpg"
import proyecto5 from "../assets/img/proyecto5.jpg"
import Footer from "../components/Footer";



const Instalaciones = () => {
    return (
        <>
            <div className="h-40 w-full relative bg-fixed bg-center bg-cover bg-header    ">
                <Navbar />
            </div>
            <section className="h-[20rem] w-full flex items-center  justify-center bg-fixed bg-center bg-cover bg-header-normal">
                <h1 className="text-primary font-semibold text-4xl md:text-6xl lg:text-8xl">INSTALACIONES</h1>
            </section>
            {/* CONTENIDO */}
            <section className="h-full w-full p-4 md:p-20 flex flex-col md:flex-row items-start justify-between">
                <div className="h-full w-full flex items-start gap-20 flex-col">
                    <article>
                        <h2 className="text-primary text-left text-4xl font-semibold">CARACTERÍSTICAS</h2>
                        <ul className="w-full list-disc ml-5">
                            <li>Terreno de 5.000 metros cuadrados</li>
                            <li>400 metros cuadrados construidos</li>
                            <li>Avance por módulos</li>
                            <li>Ubicación: Región de Valparaíso</li>
                        </ul>
                    </article>

                    <article>
                        <h2 className="text-primary text-left text-4xl font-semibold">RECURSOS</h2>
                        <ul className="w-full list-disc ml-5">
                            <li>Propios</li>
                            <li>Privados</li>
                            <li>Fondos concursables</li>
                            <li>Estado de Chile</li>
                        </ul>
                    </article>

                    <article>
                        <h2 className="text-primary text-left text-4xl font-semibold">OBJETIVO DEL PROYECTO</h2>
                        <p className="text-justify">Desarrollar un proyecto de innovación social para crear casas de reposo, sin fines de lucro para adultos mayores buscando las herramientas necesarias para que se puedan autifinanciar con sus propios recursos, privados, subvenciones del Estado
                            y desarrollar una actividad comercial de acuerdo a sus propias capacidades.</p>
                    </article>
                </div>
                <div className="h-full w-full flex items-center gap-7 flex-col ">
                    <div className="h-60 w-60 lg:w-80 ">
                        <img src={proyecto1} className="h-full w-full bg-cover" alt="casa de retiro 1" />
                    </div>
                    <div className="h-60 w-60 lg:w-80 ">
                        <img src={proyecto2} className="h-full w-full bg-cover" alt="casa de retiro 1" />
                    </div>
                    <div className="h-60 w-60 lg:w-80 ">
                        <img src={proyecto3} className="h-full w-full bg-cover" alt="casa de retiro 1" />
                    </div>
                    <div className="h-60 w-60 lg:w-80 ">
                        <img src={proyecto4} className="h-full w-full bg-cover" alt="casa de retiro 1" />
                    </div>
                </div>
            </section>
            <div className="w-full h-full flex items-center justify-center text-3xl p-3 text-primary font-semibold">

                POBLACIÓN OBJETIVO
            </div>
            <section className="h-[10rem] w-full bg-primary flex flex-col items-center justify-center text-md text-center md:text-2xl text-white font-semibold">
                <p>Población de adulto mayor autovalente, en edad temprana de 57 a 67 años.</p>
                <p>Primera etapa 50 adultos mayores autovalentes.</p>
            </section>
            <section className="h-full w-full flex flex-col md:flex-row items-center justify-between p-4 md:p-20 gap-7">
                <div> 
                <img src={proyecto1} alt="casa de retiro naval" className="h-full w-full" />
                </div>
                <div>
                <img src={proyecto2} alt="casa de retiro naval" className="h-full w-full" />
                </div>
                
            </section>

            <Footer/>


        </>
    )
}

export default Instalaciones;