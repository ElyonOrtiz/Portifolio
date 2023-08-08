import { RichTextContent } from "@graphcms/rich-text-types"


export type AboutMeIntroduction = {
  introduction:{
    raw: RichTextContent
  } 
  title: string
}

export type Memory = {
  title: string
  date: Date
  imageMemory:  {
    url: string
  }
  descriptionMemory: {
    raw: RichTextContent
  }
}