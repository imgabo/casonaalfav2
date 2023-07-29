import Navbar from "./Navbar";
import bgHeader from "../assets/img/bg-header.jpg"
import HeaderContenido from "./HeaderContenido";
import Formulario from "./Formulario";


const Header = () => {
    return (
        <>
            <div className="h-screen  relative bg-fixed bg-center bg-cover bg-header-hero ">
               
                <Navbar/>

                <div className="absolute h-full w-full flex items-center justify-center">
                    <HeaderContenido/>
                    
                </div>
            </div>
            
        </>
    )
}

export default Header;