"use client"
import axios from "axios"
import { useRef, useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import { Copy, Mail } from 'lucide-react'
import { Toaster } from "sonner"
import DrawerInfo from "./DrawerInfo"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function FormPage() {
    const formRef = useRef()
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [formSubmitted, setFormSubmitted] = useState(false)
    const emailAddress = "tlaliware@gmail.com"

    const handleSubmit = async (e) => {
        e.preventDefault()
        const fecha = new Date()
        const informacion = {
            name: e.target.nombre.value,
            email: e.target.email.value,
            telefono: e.target.tel.value,
            dir: e.target.dir.value,
            date: `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()}`,
        }
        console.log(informacion)

        try {
            const { data } = await axios.post("/api/submitForm", informacion)

            if (data.status == 200) {
                formRef.current.reset()
                toast.success("¡Se ha enviado correctamente los datos de contacto!")
                // Cerrar el drawer después de enviar exitosamente
                setDrawerOpen(false)
                // Mostrar la sección de comprobante
                setFormSubmitted(true)
            } else {
                toast.error("Ups, algo ha ocurrido por nuestra parte. Ponte en contacto con nuestro equipo lo antes posible.")
            }
        } catch (error) {
            console.error("Error al enviar el formulario:", error)
            toast.error("Ups, algo ha ocurrido por nuestra parte. Ponte en contacto con nuestro equipo lo antes posible.")
        }
    }

    const submitForm = () => {
        if (formRef.current) {
            // Verificar si el formulario es válido antes de enviarlo
            if (formRef.current.checkValidity()) {
                // Crear un evento de submit y dispararlo
                const submitEvent = new Event("submit", { bubbles: true, cancelable: true })
                formRef.current.dispatchEvent(submitEvent)
            } else {
                // Si el formulario no es válido, mostrar los mensajes de validación
                formRef.current.reportValidity()
            }
        }
    }

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
        toast.success("Correo copiado al portapapeles")
    }

    return (
        <div>
            <Toaster position="top-center" />
            <ToastContainer />
            <div className="container mx-auto py-12">
                <div className="max-w-lg mx-auto px-4">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-4">Gracias por su preferencia</h2>
                    <p className="text-gray-700 mb-5">
                        ¡Ahora tienes la oportunidad de formar parte del crecimiento de nuestra empresa adquiriendo acciones!
                    </p>
                    <p className="text-gray-700 mb-8">
                        👉 Para comenzar tu proceso de compra de acciones, por favor llena el siguiente formulario. Es el primer
                        paso para formar parte de algo grande.
                    </p>

                    {!formSubmitted ? (
                        <form ref={formRef} className="bg-white rounded-lg px-6 py-8 shadow-md" onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                                    Nombre
                                </label>
                                <input
                                    required
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="name"
                                    name="nombre"
                                    type="text"
                                    placeholder="Ingresa tu nombre"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                                    Correo electronico
                                </label>
                                <input
                                    required
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Ingresa tu email"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="tel">
                                    Teléfono de contacto
                                </label>
                                <input
                                    required
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="tel"
                                    name="tel"
                                    type="tel"
                                    placeholder="Ingresa tu teléfono"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="dir">
                                    Domicilio
                                </label>
                                <input
                                    required
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="dir"
                                    name="dir"
                                    type="text"
                                    placeholder="Ingresa tu dirección"
                                />
                            </div>

                            {/* Sección para envío de comprobante */}
                            <div className="mb-6">
                                <Card className="border-dashed bg-amber-50">
                                    <CardContent className="p-4">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Mail className="h-5 w-5 text-amber-600" />
                                            <h3 className="font-medium text-amber-800">Envío de comprobante</h3>
                                        </div>

                                        <p className="text-sm text-amber-700 mb-3">
                                            Una vez realizado el pago, por favor envía tu comprobante al siguiente correo:
                                        </p>

                                        <div className="bg-white rounded-md p-2 flex items-center justify-between border border-amber-200">
                                            <span className="font-medium text-amber-900 text-sm break-all">{emailAddress}</span>                                            
                                        </div>

                                        <p className="text-xs text-amber-600 mt-2">
                                            Incluye tu nombre completo y fecha de transferencia en el asunto del correo.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="flex justify-end">
                                <DrawerInfo onSubmit={submitForm} open={drawerOpen} onOpenChange={setDrawerOpen} />
                            </div>
                        </form>
                    ) : (
                        <div className="space-y-6">
                            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800">
                                <h3 className="font-medium text-lg flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Información recibida correctamente
                                </h3>
                                <p className="mt-2">
                                    Gracias por tu interés en adquirir acciones de Tlaliware. Para completar tu compra, sigue los pasos a continuación.
                                </p>
                            </div>

                            <Card className="border-dashed shadow-sm">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-4">Pasos para completar tu compra</h3>

                                    <ol className="list-decimal pl-5 space-y-4">
                                        <li className="pl-2">
                                            <p className="font-medium">Realiza la transferencia bancaria</p>
                                            <p className="text-gray-600 text-sm mt-1">
                                                Transfiere el monto correspondiente a la cuenta CLABE: <span className="font-medium">722969040818844439</span> a nombre de <span className="font-medium">Demian Romero Bautista</span>.
                                            </p>
                                        </li>

                                        <li className="pl-2">
                                            <p className="font-medium">Envía tu comprobante de pago</p>
                                            <div className="mt-2 bg-amber-50 rounded-md p-4 border border-amber-200">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Mail className="h-5 w-5 text-amber-600" />
                                                    <h4 className="font-medium text-amber-800">Envío de comprobante</h4>
                                                </div>

                                                <p className="text-sm text-amber-700 mb-3">
                                                    Una vez realizado el pago, por favor envía tu comprobante al siguiente correo:
                                                </p>

                                                <div className="bg-white rounded-md p-2 flex items-center justify-between border border-amber-200">
                                                    <span className="font-medium text-amber-900 text-sm break-all">{emailAddress}</span>
                                                                                                                   
                                                </div>

                                                <p className="text-xs text-amber-600 mt-2">
                                                    Incluye tu nombre completo y coloca "Comprobante acción" en el asunto del correo.
                                                </p>
                                            </div>
                                        </li>
                                    </ol>
                                </CardContent>
                            </Card>

                            <div className="flex justify-center">
                                <Button
                                    variant="outline"
                                    className="mt-4 w-full bg-green-600 text-white"
                                    onClick={() => setFormSubmitted(false)}
                                >
                                    Volver al formulario
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
