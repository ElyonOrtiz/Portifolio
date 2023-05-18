import Image from 'next/image'
import test from '../../../../../../public/images/testedeprojeto.png'
import { TechBadge } from '@/app/components/tech-badge'
import { Link } from '@/app/components/link/Link'
import { HiArrowNarrowRight } from 'react-icons/hi'
export const ProjectCard = () => {
 return(
    <div  className='flex gap-6 lg:gap-12 flex-col lg:flex-row'> 
      <div className='w-full h-full '>
        <Image className= "w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
         alt="imagem"
         width={420}
         height={304}
         src={test}/>
      </div>
      <div>
         <h3 className='flex items-center gap-3 font-medium tex-lg text-gray-50'>
            <Image
               width={20}
               height={20}
               alt="portifólio"
               src="/images/icons/project-title-icon.svg"
            />
            BoookWise
         </h3>
         <p className='text-gray-400 my-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quia laborum ad expedita qui pariatur iste non dignissimos similique, rem assumenda minus est fuga. Hic quibusdam vitae pariatur ea est iure laborum dolore illo autem rem vel voluptatum placeat aliquam, nihil voluptate, ullam eaque delectus! Aliquid ex a officia placeat.</p>
         <div className='flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8'>
            <TechBadge name='Next.js'/>
            <TechBadge name='Next.js'/>
            <TechBadge name='Next.js'/>
            <TechBadge name='Next.js'/>
            <TechBadge name='Next.js'/>
            <TechBadge name='Next.js'/>
         </div>
         <Link className='inline-flex' href="/projects/book-wise">
            Ver projeto 
            <HiArrowNarrowRight/>
         </Link>
      </div>
    </div>
 )
}