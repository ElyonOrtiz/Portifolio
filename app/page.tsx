import { HeroSection } from "./components/pages/home/hero-section";
import { HighlightedProjects } from "./components/pages/home/highlighted-projects";
import { KnownTechs } from "./components/pages/home/known-techs";
import { WorkExperience } from "./components/pages/home/work-experience";
import page from "./projects/page";
import { HomePageData } from "./types/page-info";
import { fetchHygraphQuery } from "./utils/fetch-hygraph-query";

const getPageData = async (): Promise<HomePageData> => {
  const query = `
  query MyQuery {
    page(where: {slug: "home"}) {
      introduction {
        raw
      }
      knowTechs {
        iconSvg
        name
        startDate
      }
      technologies {
        name
      }
      socials {
        url
        iconSvg
      }
      profilePicture {
        url
      }
    }
  }
 `
  return fetchHygraphQuery(
    query,
    60 * 60 * 24 
  ) 
}
export default async function Home() {
  const {page: pageData} = await getPageData();
  console.log(pageData);

    return (
    <>
      <HeroSection homeInfo={pageData}/>
      <KnownTechs techs={pageData.knowTechs} />
      <HighlightedProjects/>
      <WorkExperience />
    </>
  );
}
