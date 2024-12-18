import { PageIntroduction } from "../components/pages/projects/page-introduction";
import { ProjectsList } from "../components/pages/projects/project-list";
import { ProjectsPageData } from "../types/page-info";
import { fetchHygraphQuery } from "../utils/fetch-hygraph-query";

export const metadata = {
   title: 'Projetos'
}

const getPageData = async (): Promise<ProjectsPageData> => {
   const query = `
   query ProjectsQuery {
     projects {
       shortDescription
       slug
       title
       thumbnail {
         url
       }
       technologies {
         name
       }
     }
   }
   `

   return fetchHygraphQuery(
      query,
   )
}

export default async function Projects() {
   const { projects } = await getPageData()
   return projects && (
      <>
        <PageIntroduction />
        <ProjectsList projects={projects}/>
      </>
   )
}