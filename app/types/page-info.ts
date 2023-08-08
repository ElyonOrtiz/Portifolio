import { RichTextContent } from "@graphcms/rich-text-types"
import { KnownTech, Project } from "./projects"
import { WorkExperience } from './work-experience';
import { AboutMeIntroduction, Memory } from './aboutMe';

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

export type ProjectPageData = {
  project: Project
}

export type ProjectsPageData = {
  projects: Project[]
}

export type HomePageData = {
 page:  HomePageInfo,
 workExperiences: WorkExperience[]
}

export type ProjectsPageStaticData = {
  projects: {
    slug: string,
  }[]
}

export type AboutMeData = {
  aboutMe : {
  introduction:{
    raw: RichTextContent
  } 
  title: string
  memoriesSections: Memory[]
 }
}