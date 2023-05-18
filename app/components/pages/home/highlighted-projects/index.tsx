import { HorizontalDivider } from "@/app/components/divider/horizontal"
import { SectionTitle } from "@/app/components/section-title"
import { ProjectCard } from "./project-card"
import { Link } from "@/app/components/link/Link"
import { HiArrowNarrowRight } from "react-icons/hi"

export const HighlightedProjects = () => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="destaques" title="Projestos em destaques" />
      <HorizontalDivider className="mb-16" />
      <div>
         <ProjectCard/>
         <HorizontalDivider className="mb-16"/>
         <ProjectCard/>
         <HorizontalDivider className="mb-16"/>

         <p className="flex items-center gap-1.5 ">
           <span className="text-gray-400 text-[18px]"> Se interessou?? {''}</span>
           <Link className="inline-flex" href="/projects"> 
             Ver todos 
             <HiArrowNarrowRight/>
           </Link>
         </p>
      </div>
    </section>
  )
}