import Image from 'next/image'
import logo from '../../../../../public/images/download.png'
import { TechBadge } from '@/app/components/tech-badge'

export const ExperienceItem = () => {
   return (
    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
     <div className="flex flex-col items-center gap-4">
      <div className="rounded-full border border-gray-500 p-0.5">
       <Image 
         src={logo}
         width={40}
         height={40}
         alt="logo Prefeitura de porto velho"
         className="rounded-full "
       />
      </div>
      <div className="h-full w-[1px] bg-gray-800"/>
     </div>
     <div>
      <div className="flex flex-col text-sm gap-2 sm:text-base">
        <a 
        href=''
        target='_blank'
        className='text-gray-500 hover:text-emerald-500 transition-colors'>
          @ Prefeitura de Porto Velho       
        </a>
        <h4 className='text-gray-300'>Estagiário desenvolvedor full stack</h4>
        <span className='text-gray-500'>
          janeiro 2023 * O momento * (6 meses)
        </span>
        <p>Desenvolvimento e manutenção de sistemas ultilizando Node.js, React, Next, Typescript. Para o banco de dados e API ultiza-se mySQL e prisma como ORM. </p>
      </div>
      <p className='text-gray-300 text-sm mb-3 mt-6 font-semibold'>Competências</p>
      <div className='flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8 '>
        <TechBadge name={'React'} />
        <TechBadge name={'React'} />
        <TechBadge name={'React'} />
        <TechBadge name={'React'} />
        <TechBadge name={'React'} />
        <TechBadge name={'React'} />
        <TechBadge name={'React'} />
      </div>
     </div>
    </div>
   )
}