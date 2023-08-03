'use client'
import { Button } from "@/app/components/button"
import { SectionTitle } from "@/app/components/section-title"
import { TechBadge } from "@/app/components/tech-badge"
import { TbBrandGithub } from "react-icons/tb"
import { FiGlobe } from 'react-icons/fi'
import { Link } from "@/app/components/link/Link"
import { HiArrowNarrowLeft } from "react-icons/hi"
import { Project } from "@/app/types/projects"
import { RichText } from "@graphcms/rich-text-react-renderer"
import { motion } from "framer-motion"
import { fadeUpAnimation, techBadgeAnimation } from "@/app/lib/animation"

type ProjectDetailsProps = {
  project: Project
}

export const MemoryEvent = () => {
  return (
    <section className="w-full sm:min-h-[450px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-[-1]"
          style={{
            // add this code after the comma -> url(${project.pageThumbnail.url})
            background: `url(/images/hero-bg.png) no-repeat center/cover, no-repeat center/cover`
          }}
          initial={{ opacity: 0, scale:0}}
          animate={{ opacity:1, scale:1}}
          transition={{ duration:0.5 }}
        ></motion.div>
        <SectionTitle 
          subtitle="projetos"
          title= "Em Breve minha linha do tempo" // here will has dynamic data -> {memory.title}
          className="text-center items-center sm:[&>h3]text-4xl"
        />
        <motion.div 
          className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base"
          {...fadeUpAnimation}
         //Richtext down
         // -> {memory.description.raw}
         >
          <span className="text-gray-400 fontsize-[80px]">
            Esse espaço será destinado a postagens de eventos que considero um diferencial da minha formação e do meu trabalho
          </span>
        </motion.div>
        
        <motion.div 
          className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row"
          {...fadeUpAnimation}
        >

        </motion.div>
      
    </section>
  )
}