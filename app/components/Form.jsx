"use client"
import axios from "axios";
import { useRef } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function () {

    const formRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fecha = new Date();
        const informacion = {
            name: e.target.nombre.value,
            email: e.target.email.value,
            telefono: e.target.tel.value,
            dir: e.target.dir.value,
            date: `${fecha.getFullYear()}-${fecha.getMonth()}-${fecha.getDay()}`
        };
        const { data } = await axios.post("/api/submitForm", informacion);

        if (data.status == 200) {
            formRef.current.reset();
            toast.success('¡Se ha enviado correctamente los datos de contacto!');
        }
    }

    return (
        <div>
            <ToastContainer />
            <div className="container mx-auto py-12">
                <div className="max-w-lg mx-auto px-4">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                        Gracias por su preferencia
                    </h2>
                    <p className="text-gray-700 mb-5">
                        ¡Ahora tienes la oportunidad de formar parte del crecimiento de nuestra empresa adquiriendo acciones!
                    </p>
                    <p className="text-gray-700 mb-8">
                        👉 Para comenzar tu proceso de compra de acciones, por favor llena el siguiente formulario. Es el primer paso para formar parte de algo grande.
                    </p>
                    <form ref={formRef} className="bg-white rounded-lg px-6 py-8 shadow-md" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Nombre</label>
                            <input
                                required
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name" name="nombre" type="text" placeholder="Ingresa tu nombre" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Correo electronico</label>
                            <input
                                required
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email" name="email" type="text" placeholder="Ingresa tu email" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="tel">Teléfono de contacto</label>
                            <input
                                required
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="tel" name="tel" type="tel" placeholder="Ingresa tu teléfono" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="dir">Domicilio</label>
                            <input
                                required
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="dir" name="dir" type="text" placeholder="Ingresa tu dirección" />
                        </div>
                        <div className="flex justify-end">
                            <button
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit">
                                Quiero comprar acciones
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}