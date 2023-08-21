import Navbar from "../components/Navbar";
import ugcim from "../assets/img/UGCIM.jpg"
import presidente from "../assets/img/presidente.webp"
import Footer from "../components/Footer";

const QuienesSomos = () => {
    return (
        <>
            <div className="h-40 w-full relative bg-fixed bg-center bg-cover bg-header    ">
                <Navbar />
            </div>
            <section className="h-[20rem] w-full flex items-center  justify-center bg-fixed bg-center bg-cover bg-header-normal">
                <h1 className="text-primary font-semibold text-4xl md:text-6xl lg:text-8xl">QUIENES SOMOS</h1>
            </section>
            {/* contenido */}
            <section className="h-full w-full p-3 md:p-20 flex flex-col lg:flex-row items-center justify-between">
                <div className="h-full w-full flex flex-col space-y-8 text-justify font-semibold pr-5">
                    <p>Nuestra historia de vida se forja en el año 1978 cuando éramos sólo unos jóvenes entre 14 y 18 años, oriundos de las más diversas ciudades de Chile, con un futuro lleno de sueños y esperanzas de integrar las dotaciones del Cuerpo de Infantería de Marina de la Armada de Chile.</p>
                    <p>Como Grumetes en formación académica y militar en octubre del año 1978 fuimos embarcados y trasladados al extremo austral de Chile, viviendo nuestra mayor experiencia de vida en las islas en litigio con la República Argentina, produciéndose una metamorfosis pasando en un corto tiempo de Grumetes a Soldados del Mar.</p>

                    <p>Esta historia de vida nos dejó un legado de hermandad que atesoramos hasta el día de hoy, actualmente todos en la tercera edad de nuestras vidas, forjando nuestro proyecto de vida.</p>
                </div>
                <div className="h-full w-[20rem] md:w-[30rem] lg:w-[50rem]">
                    <img src={ugcim} alt="UGCIM LOGO" />

                </div>


            </section>
            <section className="h-full w-full p-3 md:p-20 text-justify font-semibold flex flex-col space-y-8">

                <p>Somos una asociación sin fines de lucro, creada en diciembre de 2019 cuyos fines, formas y medios para cumplir sus tareas, están
                    definidas en sus Estatutos y ha adquirido su personalidad jurídica para comenzar a operar desde el 12 de diciembre del 2019.
                    Desde el mes de marzo del año 2020, trabajamos en la planificación y puesta en marcha de nuestro proyecto, esta organización
                    cuenta con su gran motivación de crear nuestra propia CASA DE REPOSO SOCIAL, levantada con recursos propios, privados,
                    proyectos concursables y del Estado Chileno.</p>

                <p>Esta iniciativa fue creada en el seno de nuestra promoción de Grumetes IM 78, observando lo que sucede con la sociedad actual
                    con los adultos mayores, quienes pasan a ser relegados como ciudadanos de segunda categoría, sin proyectos públicos y
                    dejando en pleno abandono al llegar a la tercera y cuarta edad en su soledad infinita, buscando tener una vejez digna, donde
                    reine la paz, armonía, alegría, la sociabilidad con sus pares y no vivir la condición de abandono y soledad.</p>

            </section>
            <section className="h-full w-full ">
                <div className=" h-[20rem] flex flex-col lg:flex-row items-center justify-between p-4 md:p-0 lg:p-20 gap-10">
                    <div className="h-full  w-[50%] lg:w-full  relative  ">
                        <p className=" text-3xl md:text-5xl lg:text-7xl font-semibold text-right text-white top-0 left-0 absolute  " style={{ textShadow: '-1px -1px 0 rgba(0,0,0,0.2), 1px -1px 0 rgba(0,0,0,0.2), -1px 1px 0 rgba(0,0,0,0.2), 1px 1px 0 rgba(0,0,0,0.2)' }}>NUESTRA</p>
                        <p className=" text-3xl  md:text-5xl lg:text-8xl font-semibold text-right text-secondary absolute bottom-4 right-8 " >MISIÓN</p>
                    </div>
                    <div className="h-full w-full lg:pl-6 md:px-20  lg:px-0">
                        <p className="text-justify font-semibold">Otorgarnos la posibilidad de vivir un envejecimiento activo,
                            participativo y creativo, estimulando integralmente el aspecto
                            biológico y psicológico, contribuyendo siempre a mantener un sentido
                            de hermandad creado a través de los años.</p>
                    </div>
                </div>
            </section>
            <section className="h-full w-full  mt-10 ">
                <div className="h-[20rem] flex flex-col lg:flex-row items-center justify-between p-4 md:p-0 lg:p-20 gap-10">
                    <div className="h-full w-full pl-6 hidden lg:block ">
                        <p className="text-justify font-semibold">Poder lograr un espacio agradable y confortable en donde reine la
                            hermandad y respeto mutuo, forjado a través de muestra historia de
                            vida para convivir en armonía y lograr tener una vejez digna por sobre
                            todas las cosas.</p>
                    </div>
                    <div className="h-full  w-[50%] lg:w-full  relative ">
                        <p className=" text-3xl md:text-5xl lg:text-7xl font-semibold text-right text-white top-0 left-0 absolute  " style={{ textShadow: '-1px -1px 0 rgba(0,0,0,0.2), 1px -1px 0 rgba(0,0,0,0.2), -1px 1px 0 rgba(0,0,0,0.2), 1px 1px 0 rgba(0,0,0,0.2)' }}>NUESTRA</p>
                        <p className="text-3xl  md:text-5xl lg:text-8xl font-semibold text-right text-secondary absolute bottom-4 right-8 " >VISIÓN</p>
                    </div>
                    <div className="h-full w-full lg:pl-6 md:px-20  lg:px-0  lg:hidden">
                        <p className="text-justify font-semibold">Poder lograr un espacio agradable y confortable en donde reine la
                            hermandad y respeto mutuo, forjado a través de muestra historia de
                            vida para convivir en armonía y lograr tener una vejez digna por sobre
                            todas las cosas.</p>
                    </div>
                </div>
            </section>
            <section className="h-[10rem] w-full bg-secondary flex flex-col items-center justify-center text-2xl md:text-4xl text-white font-semibold">
                <p>Experiencias y vivencias</p>
                <p>Respeto mutuo y hermandad</p>
            </section>
            <section className="h-full w-full  flex flex-col items-center md:items-start  mt-20   font-semibold p-4 md:p-20">
                <p className="text-primary text-1xl md:text-2xl">Carta Sr. Presidente Directorio</p>
                <p className="text-secondary text-2xl md:text-6xl">Juan Encina Venegas</p>
                <div className="flex flex-col lg:flex-row justify-between item gap-7 mt-20">
                    <div className="text-justify flex flex-col space-y-4 w-full lg:w-[50rem] ">
                        <p>Nuestra Asociación es una organización privada sin fines de lucro, creada para
                            contribuir y aportar una solución imperante en nuestra sociedad hacia los adultos
                            mayores que se encuentran en la actualidad en total abandono, sumidos en su soledad
                            en lugares que muchas veces no reúnen las condiciones de entregar un espacio digno
                            para que puedan pasar sus días de vejez.</p>
                        <p>Es por ello, que nuestra iniciativa como proyecto esta orientada a cambiar de mirar
                            nuestras propias vidas, como personas acabadas esperando que pasen los años y vivir
                            en total soledad y abandono.</p>
                        <p>Miramos nuestras vidas con visión de futuro, con la esperanza de llegar a nuestra vejez
                            activos y convivir en comunidad, donde reine la armonía y apoyo en equipo, alegría,
                            esperanza, vivir dignamente con amor al prójimo, ayudándonos con nuestras propias
                            limitaciones, siendo solidarios y capaces de enfrentar nuestra tercera y cuarta edad
                            disfrutando cada momento de nuestra vida.</p>
                        <p>Lucharemos cada día por hacer realidad nuestro proyecto de vida, no es y no será fácil, pero tenemos la convicción que somos capaces de lograr nuestro objetivo.</p>
                        <p>Agradezco a cada miembro del directorio, socios y asesores por su espíritu de
                            cooperación por las metas alcanzadas, aún nos resta un largo camino por avanzar,
                            pero con su ímpetu solidario, la asesoría de profesionales en el área, privados con
                            fondos de inversión y el Estado Chileno capaz de generar iniciativas públicas para
                            nuestra población de adultos mayores, Dios mediante nos brinde sabiduría y condición
                            de salud para hacer realidad nuestros proyectos de vida y dejar un legado a nuevas
                            generaciones de adultos mayores de lograr sus sueños y metas si se lo proponen.</p>
                        <p>Fieles a nuestro lema “ORGULLO Y COMPROMISO”</p>
                    </div>
                    <div className="w-[340px] h-auto ">
                        <img src={presidente} alt="presidente casonaalfa" />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )

}

export default QuienesSomos;