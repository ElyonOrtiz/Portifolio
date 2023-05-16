import  {SectionTitle }   from "../../../section-title"
import { KnownTech } from "./known-tech"
import { TbBrandNextjs } from "react-icons/tb"

export const KnownTechs = () => {
 return (
  <section className="container py-16">
   <SectionTitle  subtitle="competências" title="Conhecimentos"/>
   <div> 
    <KnownTech tech={{
     icon: <TbBrandNextjs/>,
     name: 'Next.js',
     startDate: '2023-01-06'
    }} />
   </div>
  </section>
 )
}