"use client"
import { CreditCard, Copy } from "lucide-react"
import { Bar, BarChart, ResponsiveContainer } from "recharts"
import { toast, Toaster } from "sonner"
import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Card, CardContent } from "@/components/ui/card"

const data = [
    {
        goal: 400,
    },
    {
        goal: 300,
    },
    {
        goal: 200,
    },
    {
        goal: 300,
    },
    {
        goal: 200,
    },
    {
        goal: 278,
    },
    {
        goal: 189,
    },
    {
        goal: 239,
    },
    {
        goal: 300,
    },
    {
        goal: 200,
    },
    {
        goal: 278,
    },
    {
        goal: 189,
    },
    {
        goal: 349,
    },
]

export default function DrawerInfo({ onSubmit }) {
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
        toast.success("Texto copiado en el portapapeles")
    }

    return (
        <>
            <Toaster position="top-center" />
            <Drawer>
                <DrawerTrigger asChild>
                    <Button
                        variant="outline"
                        type="button"
                        className="text-white w-full bg-green-600 hover:bg-green-700 hover:text-white"
                    >
                        Mostrar datos bancarios
                    </Button>
                </DrawerTrigger>
                <DrawerContent>
                    <div className="mx-auto w-full max-w-sm">
                        <DrawerHeader>
                            <DrawerTitle>Datos bancarios</DrawerTitle>
                            <DrawerDescription>Realiza el deposito por la cantidad de </DrawerDescription>
                        </DrawerHeader>
                        <div className="p-4 pb-0">
                            <div className="flex items-center justify-center space-x-2">
                                <div className="flex-1 text-center">
                                    <div className="text-3xl font-bold tracking-tighter">MXN $100.00</div>
                                    <div className="text-[0.70rem] uppercase text-muted-foreground">Precio por acción de tlaliware</div>
                                </div>
                            </div>

                            {/* Sección de datos bancarios */}
                            <Card className="mt-6 border-dashed">
                                <CardContent className="p-4">
                                    <div className="flex items-center gap-2 mb-3">
                                        <CreditCard className="h-5 w-5 text-muted-foreground" />
                                        <h3 className="font-medium">Información de la cuenta</h3>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="grid grid-cols-3 gap-1">
                                            <div className="col-span-1 text-sm text-muted-foreground">Titular:</div>
                                            <div className="col-span-2 font-medium">Demian Romero Bautista </div>
                                        </div>

                                        <div className="grid grid-cols-3 gap-1">
                                            <div className="col-span-1 text-sm text-muted-foreground">CLABE:</div>
                                            <div className="col-span-2 font-medium flex items-center justify-between">
                                                <span>722969040818844439</span>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-6 w-6"
                                                    onClick={() => copyToClipboard("722969040818844439")}
                                                >                                                    
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <div className="mt-6 h-[120px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={data}>
                                        <Bar
                                            dataKey="goal"
                                            style={{
                                                fill: "hsl(var(--foreground))",
                                                opacity: 0.9,
                                            }}
                                        />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                        <DrawerFooter>
                            <Button type="button" onClick={onSubmit}>
                                Enviar datos
                            </Button>
                            <DrawerClose asChild>
                                <Button variant="outline">Cancelar</Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </div>
                </DrawerContent>
            </Drawer>
        </>
    )
}
