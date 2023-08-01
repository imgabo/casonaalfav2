import Integrante from "../components/Integrante";
import Navbar from "../components/Navbar";
import "./Directivos.css"
import presidente from "../assets/img/presidente.webp"
import boris from "../assets/img/boris.jpg"
import ralf from "../assets/img/Ralf.jpg"
import jose from "../assets/img/jose.jpg"
import raul from "../assets/img/raul.jpg"
import cristian from "../assets/img/cristian.jpg"
import luis from "../assets/img/luis.jpg"
import daniel from "../assets/img/daniel.jpg"
import patricio from "../assets/img/patricio.jpg"
import birrous from "../assets/img/birrous.png"
import Footer from "../components/Footer";
const Directivos = () => {


    return (
        <>
            <div className="h-40 w-full relative bg-fixed bg-center bg-cover bg-header    ">
                <Navbar />
            </div>
            <section className="h-[20rem] w-full flex items-center  justify-center bg-fixed bg-center bg-cover bg-header-normal">
                <h1 className="text-primary font-semibold text-4xl md:text-6xl lg:text-8xl">DIRECTIVOS</h1>
            </section>
            {/* contenido */}
            <section className="h-full w-full  flex flex-col items-center md:items-start    font-semibold p-4 md:p-20">
                <p className="text-primary text-5xl md:text-2xl">Equipo de </p>
                <p className="text-secondary text-5xl md:text-6xl">Directivos</p>
            </section>

            {/* <section className="h-full   w-full flex flex-col items-center justify-center  p-4 md:p-20">
              
            </section> */}

            <div class="container">
                <div class="level-1 rectangle"><Integrante foto={presidente} cargo='PRESIDENTE' nombre='Sr.Juan Encina Venegas' /></div>
                <ol class="level-2-wrapper">
                    <li>
                        <div class="level-2 rectangle"><Integrante foto={boris} cargo='VICEPRESIDENTE' nombre='Sr. Boris Henriquez Fuentes' /></div>

                    </li>
                    <li>
                        <div class="level-2 rectangle"><Integrante foto={ralf} cargo='TESORERO' nombre='Sr. Ralf Cisterna Venegas' /></div>

                    </li>
                    <li>
                        <div class="level-2 rectangle"><Integrante foto={jose} cargo='SECRETARIO' nombre='Sr. José González Cornejo' /></div>

                    </li>
                </ol>


                <ol class="level-2-wrapper-2 mt-10">
                    <li>
                        <div class="level-2 rectangle"><Integrante foto={raul} nombre='Sr. Raúl Orellana Arancibia' /></div>

                    </li>
                    <li>
                        <div class="level-2 rectangle"><Integrante foto={cristian} nombre='Sr. Cristian Reyes Gamboa' /></div>

                    </li>
                    <li>
                        <div class="level-2 rectangle"><p className="text-primary text-1xl md:text-2xl text-center">DIRECTORES </p></div>

                    </li>
                    <li>
                        <div class="level-2 rectangle"><Integrante foto={luis} nombre='Sr. Luis Ortiz Rosales' /></div>

                    </li>
                    <li>
                        <div class="level-2 rectangle "><Integrante foto={daniel} nombre='Sr. Daniel Carbone Vaco' /></div>

                    </li>
                </ol>
            </div>
            <section className="h-[10rem] w-full bg-primary flex flex-col items-center justify-center text-2xl md:text-4xl text-white font-semibold">
                <p>FIELES A NUESTRO LEMA</p>
                <p>“Orgullo y Compromiso”</p>
            </section>
            <section className="h-full w-full   flex  flex-col  gap-5 md:gap-0 item-center md:flex-row justify-between p-4 md:p-20">
                <div className="flex flex-col  h-full w-full  items-center md:items-start  font-semibold ">
                    <p className="text-primary text-5xl md:text-2xl">Equipo de </p>
                    <p className="text-secondary text-5xl md:text-6xl">Asesores</p>
                </div>

                <div className="flex flex-col h-full w-full gap-6">
                    <div className="flex  items-start   h-full w-full  gap-7  ">
                        <img src={patricio} alt='patricio' className="h-40 w-40" />
                        <div className="flex flex-col">
                            <h1 className="text-xl font-bold text-primary">FUNDACIÓN TRANSCENDER</h1>
                            <p>ARQUITECTO</p>
                            <p>Sr. Patricio Velez</p>
                        </div>
                    </div>
                    <div className="flex  items-start   h-full w-full  gap-7  ">
                        <img src={jose} alt='jose' className="h-40 w-40" />
                        <div className="flex flex-col">
                            <h1 className="text-xl font-bold text-primary">ABOGADO</h1>
                            <p>Sr. José González</p>
                        </div>
                    </div>
                    <div className="flex  items-start   h-full w-full  gap-7  ">
                        <img src={birrous} alt='birrous ltda' className="h-40 w-40" />
                        <div className="flex flex-col">
                            <h1 className="text-xl font-bold text-primary">CONTADOR AUDITOR</h1>
                            <p>Sr. Jorge Orellana</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>

        </>
    )
}


export default Directivos;