import { HorizontalDivider } from "@/app/components/divider/horizontal"
import { SectionTitle } from "@/app/components/section-title"
import { ProjectCard } from "./project-card"
import { Link } from "@/app/components/link/Link"
import { HiArrowNarrowRight } from "react-icons/hi"
import { Project } from "@/app/types/projects"

type HighlightedProjectsProps = {
  projects: Project[]
}
export const HighlightedProjects = ({projects}: HighlightedProjectsProps) => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="destaques" title="Projestos em destaques" />
      <HorizontalDivider className="mb-16" />
      <div>
        {projects?.map(project =>(
          <div key={project.slug}>
            <ProjectCard project={project}/>
            <HorizontalDivider className="mb-16"/>
          </div>
        ))}
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