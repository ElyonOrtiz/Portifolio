import { AboutMeIntroduction } from "../components/pages/time-line/AboutMeIntroduction";
import { MemorySection } from "../components/pages/time-line/memories";
import { AboutMeData, HomePageData } from "../types/page-info";
import { fetchHygraphQuery } from "../utils/fetch-hygraph-query";
const getPageData = async (): Promise<AboutMeData> => {
  const query = `
  query MyQuery {
    aboutMe(where: {slug: "aboutme"}) {
      introduction {
        raw
      }
      memoriesSections {
        title
        date
        imageMemory {
          url
        }
        descriptionMemory {
          raw
        }
      }
      title
    }
  }
  
 `
  return fetchHygraphQuery(
    query,
    60 * 60 * 24 
  ) 
}
export default async function Memories() {
   const { aboutMe } = await getPageData()
   return aboutMe && ( 
     <>
       <section>
        <AboutMeIntroduction introductions={aboutMe} />
        <MemorySection memories={aboutMe.memoriesSections}/>
       </section>
     </>
    )
}