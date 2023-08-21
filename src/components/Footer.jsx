import logo from "../assets/img/logo.png"



const Footer = () => {

    return (
        <footer className="w-full h-full md:h-[14rem] gap-7 md:gap-0  pt-6 bg-gradient-to-r from-primary to-secondary flex flex-col md:flex-row items-center justify-between">
            <div className="h-full w-full flex items-start justify-center">
                <img className="h-[8rem] w-auto" src={logo} alt="Casona Alfa" />
            </div>
            <div className=" h-full w-full  flex flex-col  text-center items-center md:items-start justify-start    gap-6 text-white font-semibold text-left">
                <p>INFORMACIÓN DE CONTACTO</p>
                <ul>
                    <li>contacto@casonaalfa.cl</li>
                </ul>
            </div>
            <div className=" h-full w-full   hidden md:flex flex-col items-center md:items-start  justify-start pb-5  gap-6 text-white font-semibold text-left">
                <p>NAVEGACIÓN</p>
                <ul>
                    <li className="hover:underline"><a href="/">INICIO</a></li>
                    <li className="hover:underline"><a href="/somos">QUIENES SOMOS</a></li>
                    <li className="hover:underline"><a href="/instalaciones">INSTALACIONES</a></li>
                    <li className="hover:underline"><a href="/directivos">DIRECTIVOS</a></li>
                    <li className="hover:underline"><a href="/contacto">CONTACTO</a></li>
                </ul>
            </div>
           
        </footer>


    )
}


export default Footer;