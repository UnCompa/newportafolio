import "./../styles/title.css";
import { motion } from "framer-motion";
import { GitHub, Linked, Mail } from "./Icons";
import Skills from "./Skills";
export default function Inicio() {
  return (
    <>
      <section className="h-[120vh] lg:h-screen grid grid-col-1 lg:grid-cols-2 place-items-center" id='1'>
        <div className="font-Gabarito">
          <motion.h1 
          initial={{y : -50, opacity: 0}}
          animate={{y : 0, opacity: 1}}
          transition={{transition: 0.8}}
          className="font-Poppins text-6xl text-center lg:text-start text-transparent bg-clip-text bg-gradient-to-b from-cuarto to-primario">
            UnCompa
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-start text-4xl py-4"
          >
            Desarrollador Front-End
          </motion.h2>
          <motion.p 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="px-2 md:px-0 mt-6 text-white/80 text-center lg:text-start text-lg">
            Hola me llamo <strong>Brandon Paillacho</strong> y me especializo
            actualmente en el <strong>Desarrollo Front-End</strong>. <br /> Soy un
            estudiante superior de ultimo año, y lo que aspiro es ser <strong>Desarrollador FullStack</strong>
          </motion.p>
          <motion.div 
          initial={{scale: 0, opacity: 0}}
          animate={{scale: 1, opacity: 1}}
          transition={{duration: 0.3}}
          className="flex justify-center lg:justify-start mt-8 gap-x-8">
              <motion.a href="#" className="hover:bg-slate-800 p-2 rounded-full">
                <GitHub/>
              </motion.a>
              <motion.a href="#" className="hover:bg-slate-800 p-2 rounded-full">
                <Linked/>
              </motion.a>
              <motion.a href="#" className="hover:bg-slate-800 p-2 rounded-full">
                <Mail/>
              </motion.a>
          </motion.div>
        </div>
        <motion.div
          className="w-[400px] h-[500px] md:w-[480px] md:h-[500px] relative bg-red-500 flex gap-x-10 [background:url('/newportafolio/recursos/persona4.png')] [background-size:100%] [background-position:center] shadow-2xl shadow-blue-500/20"
          initial={{opacity: 0, scale: 0, borderRadius:"100%"}}
          animate={{opacity: 1, scale: 1,borderRadius:"0%"}}
          transition={{transition: 2}}
          
        >
          <div className="bg-black/30 h-full w-6"></div>
          <div className="bg-black/30 h-full w-6"></div>
          <div className="bg-black/30 h-full w-6"></div>
          <div className="bg-black/30 h-full w-6"></div>
          <div className="bg-black/30 h-full w-6"></div>
          <div className="bg-black/30 h-full w-6"></div>
          <div className="bg-black/30 h-full w-6"></div>
          <div className="bg-black/30 h-full w-6"></div>
          <div className="bg-black/30 h-full w-6"></div>
          <div className="bg-black/30 h-full w-6"></div>
          <div className="bg-black/30 h-full w-6"></div>
          <div className="bg-black/30 h-full w-6"></div>
        </motion.div>
      </section>
    </>
  );
}
