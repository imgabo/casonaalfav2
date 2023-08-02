import { useState } from "react";




const Formulario = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        message: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://tu-servidor/contact.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            // Manejar la respuesta del backend según tus necesidades.
            console.log('Respuesta del backend:', await response.json());

            // Puedes mostrar un mensaje de éxito o redirigir al usuario a otra página.
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            console.log(JSON.stringify(formData))
        }
    };




    return (
        <div className="flex flex-col">

            <form className="flex flex-col" onSubmit={handleSubmit}>
                <div className="mb-4 flex gap-5">
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Ingrese su Nombre" name="firstName" value={formData.firstName}
                        onChange={handleChange}
                        required />
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Ingrese su Apellido" name="lastName" value={formData.lastName} onChange={handleChange}
                        required/>
                </div>
                <div className="mb-4 flex gap-5">
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Teléfono" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required/>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Correo electrónico" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <textarea
                    className="peer bg-white h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent  px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder="Mensaje"
                name="message" value={formData.message} onChange={handleChange} required></textarea>
                <button className="bg-orange-500 mt-4 rounded-xl py-3 px-8 text-white font-semibold transition-transform transform hover:scale-110" type="submit">
                    Enviar Solicitud
                </button>


            </form>


        </div>
    )

}


export default Formulario;