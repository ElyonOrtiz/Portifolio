'use client'
import Image from 'next/image'
import test from '../../../../../../public/images/testedeprojeto.png'
import { TechBadge } from '@/app/components/tech-badge'
import { Link } from '@/app/components/link/Link'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Project } from '@/app/types/projects'
import { motion } from 'framer-motion'

type ProjectCardProps = {
   project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
   const animProps = {
      initial: { opacity: 0, y:50},
      whileInView: { opacity: 1, y:0},
      exit: { opacity: 0, y:50}
   } 
   
   return (
      
      <motion.div 
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
      className='flex gap-6 lg:gap-12 flex-col lg:flex-row'
      >
         <motion.div 
         initial={{ opacity: 0, y: 100, scale:0.5 }}
         whileInView={{ opacity: 1, y: 0, scale: 1 }}
         exit={{ opacity: 0, y: 100, scale: 0.5 }}
         transition={{ duration: 0.3, delay: 0.3 }}
         className='w-full  h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full'>
            <Image className="w-full h-full object-cover rounded-lg"
               alt={`Thumbnail do projeto ${project.title}`}
               width={420}
               height={304}
               src={project.thumbnail.url} />
         </motion.div>
         <div className='flex-1 lg:py-[18px]'>
            <motion.h3 
            {...animProps}
            transition={{ duration: 0.7}}
            className='flex items-center gap-3 font-medium tex-lg text-gray-50'>
               <Image
                  width={20}
                  height={20}
                  alt="portifólio"
                  src="/images/icons/project-title-icon.svg"
               />
               {project.title}
            </motion.h3>
            <motion.p 
            {...animProps}
            transition={{ duration:0.2, delay: 0.3}}
            className='text-gray-400 my-6'>
            {project.shortDescription}
            </motion.p>
            <div className='flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8'>
               {project.technologies?.map((tech, i) => (
                   <TechBadge
                   initial={{ opacity: 0, scale:0}}
                   whileInView={{ opacity: 1, scale:1}}
                   exit={{ opacity: 0, scale:0}}
                   transition={{ duration:0.2, delay:0.5 + i * 0.1}}
                   key={`${project.title}-${tech.name}`} name={tech.name}/>
               ))}
            </div>

            <Link className='inline-flex' href={`/projects/${project.slug}`}>
               Ver projeto
               <HiArrowNarrowRight />
            </Link>
         </div>
      </motion.div>
   )
}