import Formulario from "../components/Formulario";
import Navbar from "../components/Navbar";
import logo from "../assets/img/logo.png"
import Footer from "../components/Footer";


const Contacto = () => {

    return (
        <>
            <div className="h-40 w-full relative bg-fixed bg-center bg-cover bg-header    ">
                <Navbar />
            </div>
            <section className="h-[20rem] w-full flex items-center  justify-center bg-fixed bg-center bg-cover bg-header-normal">
                <h1 className="text-primary font-semibold text-4xl md:text-6xl lg:text-8xl">CONTACTO</h1>
            </section>
            {/* CONTENIDO */}
            <section className="h-full w-full p-4 md:p-20 flex flex-1 md:flex-row items-start justify-between">
                <div className="flex flex-col">
                    <h3 className="text-left">Complete el siguiente formulario de contacto y en breve tomaremos contacto con usted</h3>
                     <Formulario/>
                   
                </div>
                <div className=" h-80 w-[70%] flex flex-col  items-center relative ">
                    <p>INFORMACIÓN DE CONTACTO</p>
                    <p className="font-semibold">contacto@casonaalfa.cl</p>
                    <p className="font-semibold text-left">+569 1234 5678</p>
                    <div className="absolute bottom-0">REDES SOCIALES</div>
                </div>
                <div className="h-80 w-full flex items-center justify-center">
                    <img src={logo} alt="casona alfa" className="h-[90%] w-auto"/>
                </div>
            
            </section>
            <section className="mt-15 w-full h-full"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107069.87171241817!2d-71.53025555!3d-33.0055289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689de84ead41255%3A0x8e5fde76df3d413f!2zVmnDsWEgZGVsIE1hciwgVmFscGFyYcOtc28!5e0!3m2!1ses-419!2scl!4v1691008929900!5m2!1ses-419!2scl" width="100%" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></section>
            <Footer/>
        </>
    )
}

export default Contacto;