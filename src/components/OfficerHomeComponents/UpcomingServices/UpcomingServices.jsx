export default function UpcomingServices(){
    return(
        // Tarjeta 1: Próximos Servicios
        // Aquí reutilizamos este componente de Flowbite: https://flowbite.com/docs/components/tables/ 
        // (sección hover state)
        <div className="bg-white rounded-xl shadow-md p-6 min-h-[475px]">
            <h2 className="font-extrabold text-black text-[24px] mb-6">Próximos servicios</h2>

            <div className="relative overflow-x-auto bg-neutral-primary-soft rounded-base">
                <table className="w-full text-sm text-left rtl:text-right text-body">
                    <thead className="text-sm text-body bg-neutral-secondary-medium">
                        {/* tr: table row (fila de la tabla)
                        th: table header (encabezado de la tabla)
                        td: table data (celda de la tabla) */}
                        <tr>
                            {/* pl: padding-left, pr: padding-right, py: padding-top and padding-bottom */}
                            <th scope="col" className="pl-0 pr-6 py-3 font-normal text-[20px]">
                                Cliente
                            </th>
                            <th scope="col" className="px-6 py-3 font-normal text-[20px]">
                                Hora
                            </th>
                            <th scope="col" className="px-6 py-3 font-normal text-[20px]">
                                Dirección
                            </th>
                            <th scope="col" className="px-6 py-3 font-normal text-[20px]">
                                Oficio
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-neutral-primary-soft hover:bg-neutral-secondary-medium">
                            <td scope="row" className="pl-0 pr-6 py-4 font-light text-heading whitespace-nowrap text-[17px]">
                                Fernando Toro
                            </td>
                            <td scope="row" className="px-6 py-4 font-light text-[17px]">
                                9:00
                            </td>
                            <td scope="row" className="px-6 py-4 font-light text-[17px]">
                                Cra 45 # 23-56
                            </td>
                            <td scope="row" className="px-6 py-4 font-light text-[17px]">
                                Limpieza
                            </td>
                        </tr>
                        <tr className="bg-neutral-primary-soft hover:bg-neutral-secondary-medium">
                            <td scope="row" className="pl-0 pr-6 py-4 font-light text-heading whitespace-nowrap text-[17px]">
                                Victor Martínez
                            </td>
                            <td scope="row" className="px-6 py-4 font-light text-[17px]">
                                15:00
                            </td>
                            <td scope="row" className="px-6 py-4 font-light text-[17px]">
                                Cra 45 # 23-56
                            </td>
                            <td scope="row" className="px-6 py-4 font-light text-[17px]">
                                Plomería
                            </td>
                        </tr>
                        <tr className="bg-neutral-primary-soft hover:bg-neutral-secondary-medium">
                            <td scope="row" className="pl-0 pr-6 py-4 font-light text-heading whitespace-nowrap text-[17px]">
                                Jacobo Arroyave
                            </td>
                            <td scope="row" className="px-6 py-4 font-light text-[17px]">
                                12:00
                            </td>
                            <td scope="row" className="px-6 py-4 font-light text-[17px]">
                                Cra 45 # 23-56
                            </td>
                            <td scope="row" className="px-6 py-4 font-light text-[17px]">
                                Electricidad
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}