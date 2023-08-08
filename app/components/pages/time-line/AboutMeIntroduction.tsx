'use client'
import { SectionTitle } from "@/app/components/section-title"
import { RichText } from "@graphcms/rich-text-react-renderer";
import { motion } from "framer-motion"
import { fadeUpAnimation } from "@/app/lib/animation"
import { AboutMeIntroduction as Introduction } from "@/app/types/aboutMe"

type IntroductionProps = {
  introductions: Introduction
}

export const AboutMeIntroduction = ({introductions}: IntroductionProps ) => {
  return (
    <section className="w-full sm:min-h-[450px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-[-1]"
          style={{
            background: `url(/images/hero-bg.png) no-repeat center/cover, no-repeat center/cover`
          }}
          initial={{ opacity: 0, scale:0}}
          animate={{ opacity:1, scale:1}}
          transition={{ duration:0.5 }}
        ></motion.div>
     
          <SectionTitle 
          subtitle={introductions.title}
          title= "Histórico profissional e acadêmico" // here will has dynamic data -> {memory.title}
          className="text-center items-center sm:[&>h3]text-4xl"
        />
        
        <motion.div 
          className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base"
          {...fadeUpAnimation}
         >
          <div className="text-gray-400 my-6 text-sm sm:text-base">
              <RichText content={introductions.introduction.raw}/>
          </div>
        </motion.div>
        
        <motion.div 
          className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row"
          {...fadeUpAnimation}
        >
        </motion.div>
    </section>
  )
}