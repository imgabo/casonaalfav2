import logo from "../assets/img/logo.png"



const Footer = () => {

    return (
        <footer className="w-full h-[14rem] mt-5  pt-6 bg-gradient-to-r from-primary to-secondary flex items-center justify-between">
            <div className="h-full w-full flex items-start justify-center">
                <img className="h-[8rem] w-auto" src={logo} alt="Casona Alfa" />
            </div>
            <div className=" h-full w-full  flex flex-col items-start justify-start    gap-6 text-white font-semibold text-left">
                <p>INFORMACIÓN DE CONTACTO</p>
                <ul>
                    <li>contacto@casonaalfa.cl</li>
                    <li>+569 1234 5678</li>
                </ul>
            </div>
            <div className=" h-full w-full  flex flex-col items-start  justify-start pb-5  gap-6 text-white font-semibold text-left">
                <p>NAVEGACIÓN</p>
                <ul>
                    <li>INICIO</li>
                    <li>QUIENES SOMOS</li>
                    <li>INSTALACIONES</li>
                    <li>DIRECTIVOS</li>
                    <li>CONTACTO</li>
                </ul>
            </div>
            <div className=" h-full w-full  flex flex-col items-start justify-start pb-3 gap-6 text-white font-semibold">
                <p>REDES SOCIALES</p>
            </div>
        </footer>


    )
}


export default Footer;