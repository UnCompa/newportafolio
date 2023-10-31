import "./../styles/title.css";
import { motion } from "framer-motion";
export default function Inicio() {
  return (
    <>
      <section className="h-[120vh] lg:h-screen grid grid-col-1 lg:grid-cols-2 place-items-center">
        <div className="font-Gabarito">
          <motion.h1 
          initial={{y : -50, opacity: 0}}
          animate={{y : 0, opacity: 1}}
          transition={{transition: 0.5}}
          className="font-Poppins text-6xl text-center lg:text-start text-transparent bg-clip-text bg-gradient-to-b from-cuarto to-primario">
            UnCompa
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-center lg:text-start text-4xl py-4"
          >
            Desarrollador Front-End
          </motion.h2>
          <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="px-2 md:px-0 mt-6 text-white/80 text-center lg:text-start">
            Hola me llamo <strong>Brandon Paillacho</strong> y me especializo
            actualmente en el <strong>desarrollo front-end</strong>. Soy un
            estudiante de último año, asi que aspiro a ser{" "}
            <strong>FullStack</strong>
          </motion.p>
        </div>
        <motion.div
          className="w-[400px] h-[400px] relative bg-red-500 flex gap-x-10 [background:url('/newportafolio/gato.jpg')] [background-size:cover] [background-position:end] shadow-2xl shadow-blue-500/20"
          initial={{opacity: 0, scale: 0}}
          animate={{opacity: 1, scale: 1}}
          transition={{transition: 1}}
          
        >
          <div className="bg-black/50 h-full w-12"></div>
          <div className="bg-black/50 h-full w-12"></div>
          <div className="bg-black/50 h-full w-12"></div>
          <div className="bg-black/50 h-full w-12"></div>
          <div className="bg-black/50 h-full w-12"></div>
          <div className="bg-black/50 h-full w-12"></div>
        </motion.div>
      </section>
    </>
  );
}
