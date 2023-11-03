import {motion, easeIn} from 'framer-motion'
export default function Card({title,color1,color2,text}) {
  return (
    <motion.div 
    initial={{opacity: 0, y: 10}}
    whileInView={{opacity: 1, y: 0}}
    viewport={{once: false}}
    transition={{transition:1, ease: easeIn}}
    className="w-full h-full grid grid-rows-2 grid-cols-1">
        <div className="my-4 overflow-hidden">
            <img src="/newportafolio/gato.jpg" alt="Proyecto" className="w-full h-72 bg-slate-800 object-cover hover:-rotate-3 hover:scale-95 hover:opacity-80 origin-right transition-all" />
        </div>
        <motion.div
         initial={{opacity: 0, y: 100}}
         animate={{y: 0}}
         whileInView={{opacity: 1}}
         transition={{transition:2}}
         viewport={{once: false}}
         className="bg-slate-900 p-4 flex-col center rounded shadow-lg shadow-slate-700/30">
            <h2 className={`text-3xl underline ${color1} pb-2`}>{title}</h2>
            <p className="text-gray-100 pb-2">{text}</p>
            <button className={`rounded px-8 py-1 ${color2}`}>Ir</button>
        </motion.div>
    </motion.div>
  )
}
