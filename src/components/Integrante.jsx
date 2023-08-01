




const Integrante = ({foto, nombre, cargo}) => {
    return (
        <div className="flex flex-col items-center justify-center h-[full] w-full">
            <img src={foto} className="h-[150px] w-auto" alt={cargo}/>
            <h1>{cargo}</h1>
            <h3 className=" text-center">{nombre}</h3>
        </div>
    )
}


export default Integrante;