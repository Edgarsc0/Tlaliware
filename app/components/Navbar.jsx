export default function () {
    return (
        <>
            <nav className="bg-white border-gray-200">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="tlaliware.jpeg" className="h-12 rounded-xl" alt="Flowbite Logo" />
                        <span className="self-center text-2xl whitespace-nowrap dark:text-white">Tlali<span className="font-bold text-green-700">ware</span></span>
                    </a>

                </div>
            </nav>
            <nav className="bg-gray-50 dark:bg-gray-700">
                <hr className="border-gray-300" />
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Inicio</a>
                            </li>
                            <li>
                                <a href="/" className="text-gray-900 dark:text-white hover:underline">Compra acciones</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="border-gray-300" />
            </nav>
        </>
    )
}