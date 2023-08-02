import Navbar from "./Navbar";

import HeaderContenido from "./HeaderContenido";



const Header = () => {
    return (
        <>
            <div className="h-screen mb-12  relative bg-fixed bg-center bg-cover bg-header-hero ">
               
                <Navbar/>

                <div className="absolute h-full w-full flex items-center justify-center">
                    <HeaderContenido/>
                    
                </div>
            </div>
            
        </>
    )
}

export default Header;