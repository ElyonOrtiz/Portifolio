import Image from "next/image"
import varvariavel1 from '../../../../../../../public/images/Wallpaper- 2560x1600.png'

export const ProjectCard = () => {
  return (
   <div className="rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border-2 border-gray-800 hover:border-emerald-500 opacity-70 hover:opacity-100 transition-all group">
    <div className="w-full h-48 overflow-hidden"> 
      <Image
       src={varvariavel1}
       alt="Imagem Projeto NLW"
       width={380}
       height={200}
       unoptimized
       className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"
      />
    </div>
    <div className="flex flex-1 flex-col p-8 ">
      <strong className="font-medium text-gray-50/90 group-hogver:text-emerald-500 transition-all">NLW Space Time</strong>
      <p className="mt-2 text-gray-400 line-clamp-4"> Space Time è um projeto da RocktSeat de um intencivão de programação realizado em maio de 2022, é uma plataforma que permite fazer postagem de eventos pessoais destacando a linha do tempo de seus usários </p>
      <span className="text-gray-300 tex-sm font-medium clock mt-auto truncate">Next.js, Axios, Prisma, React, TypeScript,  </span>
    </div>
   </div>
  )
}