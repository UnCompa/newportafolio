import { motion } from "framer-motion";
export default function Nav({ type }) {
  return (
    <div
      className={`h-screen w-fit fixed top-16 md:static md:h-16 md:w-full md:p-0 flex items-center justify-center transition-all duration-300 ${type}`}
    >
      <nav className="bg-blue-950 w-1/1 md:bg-transparent z-10 h-screen sticky shadow-xl md:shadow-none md:z-0 md:h-full md:static">
        <ul className="grid grid-rows-5 place-content-center gap-y-2 md:flex md:justify-evenly md:w-full font-Gabarito font-medium w-full">
          <motion.li
           initial={{y: -150}}
           animate={{y: 0}}
           className='border-4 border-blue-800 text-center mx-2 my-2 py-4 px- md:py-2 md:px-4 hover:bg-blue-800 transition-colors'
           >
            <a href="#1" className="text-center md:py-2 md:px-4 hover:bg-blue-800 transition-colors">Inicio</a>
          </motion.li>
          <motion.li
           initial={{y: -150}}
           animate={{y: 0}}
           className="w-96 md:w-full border-4 border-sky-600 text-center mx-2 my-2 py-4 px-6 md:py-2 md:px-6 hover:bg-sky-600 transition-colors"
           >
            <a href="#2" className="hover:bg-sky-600 transition-colors">Proyectos</a>
          </motion.li>
          <motion.li
           initial={{y: -150}}
           animate={{y: 0}}
           className="w-96 md:w-full border-4 border-green-600 text-center mx-2 my-2 py-4 px-6 md:py-2 md:px-6 hover:bg-green-600 transition-colors"
           >
          <a href="#3" className="hover:bg-green-600 transition-colors">Habilidades</a>
          </motion.li>
          <motion.li
           initial={{y: -150}}
           animate={{y: 0}}
           className="w-96 md:w-full border-4 border-red-500 text-center mx-2 my-2 py-4 px-6 md:py-2 md:px-6 hover:bg-red-500 transition-colors"
           >
            <a href="#4" className="hover:bg-red-500 transition-colors">Información</a>
          </motion.li>
          <motion.li
           initial={{y: -150}}
           animate={{y: 0}}
           className="w-96 md:w-full border-4 border-purple-500 text-center mx-2 my-2 py-4 px-6 md:py-2 md:px-6 hover:bg-purple-500 transition-colors"
           >
            <a href="#5" className="hover:bg-purple-500 transition-colors">Contactos</a>
          </motion.li>
        </ul>
      </nav>
    </div>
  );
}
