import { HeroSection } from "./components/pages/home/hero-section";
import { HighlightedProjects } from "./components/pages/home/highlighted-projects";
import { KnownTechs } from "./components/pages/home/known-techs";
import { WorkExperience } from "./components/pages/home/work-experience";
import { HomePageData } from "./types/page-info";
import { fetchHygraphQuery } from "./utils/fetch-hygraph-query";


const getPageData = async (): Promise<HomePageData> => {
  const query = `
  query MyQuery {
    page(where: {slug: "home"}) {
      introduction {
        raw
      }
      knownTechs {
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
      highlightProjects {
        slug
        thumbnail {
          url
        }
        title
        shortDescription
        technologies {
          name
        }
      }
    }
    workExperiences{
      companyLogo {
        url
      }
      role
      companyName
      companyUrl
      endDate
      startDate
      description {
        raw
      }
      technologies {
        name
      }
    }
  }
 `
  return fetchHygraphQuery(
    query,
    1
  ) 
}
export default async function Home() {
  const {page: pageData, workExperiences} = await getPageData();
    return (
    <>
      <HeroSection homeInfo={pageData}/>
      <KnownTechs techs={pageData.knownTechs} />
      <HighlightedProjects projects={pageData.highlightProjects}/>
      <WorkExperience experiences={workExperiences}/>
    </>
  );
}
