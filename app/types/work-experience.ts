import { RichTextContent } from '@graphcms/rich-text-types';
import { KnownTech } from "./projects"


export type WorkExperience = {
 companyLogo: {
  url: string
}
role: string
companyName: string
companyUrl: string
endDate?: string
startDate: string
description: {
  raw: RichTextContent
}
technologies: KnownTech[]
}