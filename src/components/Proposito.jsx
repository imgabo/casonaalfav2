import proposito from "../assets/img/proposito.jpg"
import proposito2 from "../assets/img/proposito2.jpg"
import Boton from "./Boton";


const Proposito = () => {
    return (

        <section className="w-full h-full  flex flex-col md:flex-row items-center justify-between p-10 gap-20">
            <div className="w-full h-[20rem]    relative">
                <img src={proposito} alt="Persona adulta viviendo feliz casa de retiro" className="h-full w-full  absolute top-0 left-0 rounded-3xl" />
                <div class="absolute w-[200px]  bottom-[-45px] right-[-100px] ">
                    <img src={proposito2} alt="Vejez en paz" className="rounded-full border-2 border-primary shadow-sm" />
                </div>

            </div>
            <div className="w-full h-full   ">
                <div className="w-full h-24    relative">
                    <h1 className="text-2xl md:text-5xl font-semibold text-left text-pine-green absolute z-10">PROPOSITO</h1>
                    <h1 className=" text-3xl md:text-6xl font-semibold text-right text-white mr-10 absolute bottom-4 right-0 " style={{ textShadow: '-1px -1px 0 rgba(0,0,0,0.2), 1px -1px 0 rgba(0,0,0,0.2), -1px 1px 0 rgba(0,0,0,0.2), 1px 1px 0 rgba(0,0,0,0.2)' }}>PROPOSITO</h1>
                </div>
                <p className="font-semibold mr-10 text-justify"> Buscamos un espacio acogedor, para llegar a una vejez única,
                    donde reine la paz, la armonía, el acompañamiento, la camaradería,
                    alegría, la sociabilidad y evitar vivir la condición de abandono y
                    soledad.</p>
                <ul className="mt-3  ml-5  list-disc text-primary text-xl">
                    <li><p className="text-black font-semibold text-sm ">PASIÓN POR LAS PERSONAS</p></li>
                    <li><p className="text-black font-semibold text-sm ">HOGAR ACOGEDOR Y ÚNICO</p></li>
                    <li><p className="text-black font-semibold text-sm ">TRANQUILIDAD Y ARMONÍA</p></li>
                    <li><p className="text-black font-semibold text-sm ">EXPERIENCIA Y COMPROMISO</p></li>
                </ul>
                <div className=" w-full md:w-[22rem] h-full mt-3 z-40">
                    <Boton     titulo='CONTÁCTANOS >>' toLink='#' />
                </div>
                
            </div>

        </section>
    )
}


export default Proposito;