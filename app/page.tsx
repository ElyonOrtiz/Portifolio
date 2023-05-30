import { HeroSection } from "./components/pages/home/hero-section";
import { HighlightedProjects } from "./components/pages/home/highlighted-projects";
import { KnownTechs } from "./components/pages/home/known-techs";
import { WorkExperience } from "./components/pages/home/work-experience";
import { fetchHygraphQuery } from "./utils/fetch-hygraph-query";

const getPageData = async () => {
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
    query
  ) 
}
export default async function Home() {
  const response = await getPageData();
  console.log(response);
  console.log('Chegou aqui');
    return (
    <>
      <HeroSection />
      <KnownTechs />
      <HighlightedProjects/>
      <WorkExperience />
    </>
  );
}
