


const Boton = ({titulo , toLink}) =>{
    return (
        <>
            <button className="bg-gradient-to-r w-full z-50 from-primary to-secondary rounded-xl py-3 px-8 text-white font-semibold transition-transform transform hover:scale-110" href={toLink}>
                {titulo}
            </button>


        </>
    )
}

export default Boton;