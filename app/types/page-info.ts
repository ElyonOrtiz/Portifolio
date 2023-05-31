import { RichTextContent } from "@graphcms/rich-text-types"
import { KnownTech } from "./projects"

export type Social = {
  url: string
  iconSvg: string
}

export type HomePageInfo = {
  introduction: {
   raw: RichTextContent
  }

  knowTechs: KnownTech[]

  technologies: KnownTech[]

  socials: Social[]

  profilePicture: {
  url: string
 }

}
export type HomePageData = {
 page:  HomePageInfo
}