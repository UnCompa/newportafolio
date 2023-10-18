export default function Nav({type}) {
  return (
    <div className={`h-screen w-20 fixed top-16 md:static md:h-16 md:w-1/2 md:p-4 flex items-center justify-center transition-all duration-300 ${type}`}>
        <nav className="bg-cuarto w-1/1 md:bg-transparent z-10 h-screen sticky shadow-xl md:shadow-none md:z-0 md:h-full md:staticl"> {/*hidden md:block min-w-max*/}
    <ul className="grid md:grid-cols-5 font-Gabarito font-medium">
        <li className="w-screen mx-2 px-2 py-1">Nuevo</li>
        <li className="w-screen mx-2 px-2 py-1">Aqui</li>
        <li className="w-screen mx-2 px-2 py-1">Más</li>
        <li className="w-screen mx-2 px-2 py-1">Mirar</li>
        <li className="w-screen mx-2 px-2 py-1">Link</li>
    </ul>
</nav>
    </div>
  )
}

