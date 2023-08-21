


// eslint-disable-next-line react/prop-types
const Boton = ({titulo , toLink}) =>{
    return (
        <>
            <a  href={toLink}>
                <button className="bg-gradient-to-r w-full z-50 from-primary to-secondary rounded-xl py-3 px-8 text-white font-semibold transition-transform transform hover:scale-110">
                    {titulo}
                </button>
            </a>


        </>
    )
}

export default Boton;