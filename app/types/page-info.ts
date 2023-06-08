import { RichTextContent } from "@graphcms/rich-text-types"
import { KnownTech, Project } from "./projects"
import { WorkExperience } from './work-experience';

export type Social = {
  url: string
  iconSvg: string
}

export type HomePageInfo = {
  introduction: {
   raw: RichTextContent
  }

  knownTechs: KnownTech[]

  technologies: KnownTech[]

  socials: Social[]

  profilePicture: {
  url: string
 }
 highlightProjects: Project[]
 
}

export type HomePageData = {
 page:  HomePageInfo,
 workExperiences: WorkExperience[]
}