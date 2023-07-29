



const Formulario = () => {
    return (
        <div className="flex flex-col">
            <h1 className="text-white p-2 text-center">Contacte Con Nosotros</h1>
            <form className="flex flex-col">
                <div className="mb-4 flex gap-5">
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Ingrese su Nombre" />
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Ingrese su Apellido" />
                </div>
                <div className="mb-4 flex gap-5">
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Teléfono" />
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Correo electrónico" />
                </div>
                <textarea
                    className="peer bg-white h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent  px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder="Mensaje"
                ></textarea>
                <button className="bg-orange-500 mt-4 rounded-xl py-3 px-8 text-white font-semibold transition-transform transform hover:scale-110" type="submit">
                    Enviar Solicitud
                </button>


            </form>


        </div>
    )

}


export default Formulario;