export default function Card({title,color1,color2,text}) {
  return (
    <div className="w-full h-full grid grid-rows-2 grid-cols-1">
        <div className="hover:ring-2 hover:ring-white my-4">
            <img src="/newportafolio/gato.jpg" alt="Proyecto" className="w-full h-72 bg-slate-800 object-cover" />
        </div>
        <div className="bg-slate-800 p-4 flex-col center">
            <h2 className={`text-2xl underline ${color1} pb-2`}>{title}</h2>
            <p className="text-gray-100 pb-2">{text}</p>
            <button className={`rounded px-8 py-1 ${color2}`}>Ir</button>
        </div>
    </div>
  )
}
