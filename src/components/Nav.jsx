export default function Nav({type}) {
  return (
    <div className={`h-screen w-20 fixed top-16 md:static md:h-16 md:w-2/3 md:p-4 flex items-center justify-center transition-all duration-300 ${type}`}>
        <nav className="bg-cuarto w-1/1 md:bg-transparent z-10 h-screen sticky shadow-xl md:shadow-none md:z-0 md:h-full md:staticl"> {/*hidden md:block min-w-max*/}
    <ul className="grid grid-rows-5 place-content-center gap-y-4 w-96 md:flex md:justify-evenly md:w-full font-Gabarito font-medium">
        <li className="text-center mx-2 py-2 px-4 hover:bg-slate-800"><a href="#">Inicio</a></li>
        <li className="text-center mx-2 py-2 px-4 hover:bg-slate-800"><a href="#">Proyectos</a></li>
        <li className="text-center mx-2 py-2 px-4 hover:bg-slate-800"><a href="#">Habilidades</a></li>
        <li className="text-center mx-2 py-2 px-4 hover:bg-slate-800"><a href="#">Sobre mi</a></li>
        <li className="text-center mx-2 py-2 px-4 hover:bg-slate-800"><a href="#">Contactos</a></li>
    </ul>
</nav>
    </div>
  )
}

