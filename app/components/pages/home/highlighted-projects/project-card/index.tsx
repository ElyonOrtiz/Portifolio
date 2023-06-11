import Image from 'next/image'
import test from '../../../../../../public/images/testedeprojeto.png'
import { TechBadge } from '@/app/components/tech-badge'
import { Link } from '@/app/components/link/Link'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Project } from '@/app/types/projects'

type ProjectCardProps = {
   project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
   return (
      <div className='flex gap-6 lg:gap-12 flex-col lg:flex-row'>
         <div className='w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full '>
            <Image className="w-full h-full object-cover rounded-lg"
               alt={`Thumbnail do projeto ${project.title}`}
               width={420}
               height={304}
               src={project.thumbnail.url} />
         </div>
         <div className='flex-1 lg:py-[18px]'>
            <h3 className='flex items-center gap-3 font-medium tex-lg text-gray-50'>
               <Image
                  width={20}
                  height={20}
                  alt="portifólio"
                  src="/images/icons/project-title-icon.svg"
               />
               {project.title}
            </h3>
            <p className='text-gray-400 my-6'>
            {project.shortDescription}
            </p>
            <div className='flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8'>
               {project.technologies?.map(tech => (
                   <TechBadge key={`${project.title}-${tech.name}`} name={tech.name}/>
               ))}
            </div>

            <Link className='inline-flex' href={`/projects/${project.slug}`}>
               Ver projeto
               <HiArrowNarrowRight />
            </Link>
         </div>
      </div>
   )
}