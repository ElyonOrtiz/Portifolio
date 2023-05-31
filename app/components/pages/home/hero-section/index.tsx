'use client'
import { Button } from "@/app/components/button";
import { TechBadge } from "@/app/components/tech-badge";
import { HiArrowNarrowRight } from "react-icons/hi";
import Image from "next/image";
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandWhatsapp,
} from "react-icons/tb";
import { HomePageInfo } from "@/app/types/page-info";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { CMSIcon } from "@/app/components/cms-icon";

const MOCK_CONTACTS = [
  {
    url: "https://github.com.br",
    icon: <TbBrandGithub />,
  },
  {
    url: "https://github.com.br",
    icon: <TbBrandLinkedin />,
  },
  {
    url: "https://github.com.br",
    icon: <TbBrandWhatsapp />,
  },
];

type HomeSectionProps = {
  homeInfo: HomePageInfo
}

export const HeroSection = ({homeInfo}: HomeSectionProps) => {
  const handleContatact = () => {
    const contactSection = document.querySelector('#contact');
    if(contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-emerald-400">Olá meu nome é</p>
          <h2 className="text-4xl font-medium mt-2"> Elyon Ortiz</h2>
            {/* Here My Text Of Introduction */}
          <div className="text-gray-400 my-6 text-sm sm:text-base">
            <RichText content={homeInfo.introduction.raw}/>
          </div>
          {/*  */}
          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {homeInfo.technologies.map((tech) => (
              <TechBadge name={tech.name} />
            ))}
          </div>

          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row ">
            <Button className="shadow-button w-max" onClick={handleContatact}>
              Entre em contato
              <HiArrowNarrowRight size={18} />
            </Button>

            <div className="text-4xl text-gray-600 flex items-center h-20 gap-3">
              {homeInfo.socials.map((contact, index) => (
                <a
                  href={contact.url}
                  key={`contact-${index}`}
                  target="_blank"
                  className="hover:text-gray-100 transition-colors "
                >
                  <CMSIcon icon={contact.iconSvg}/>
                </a>
              ))}
            </div>
          </div>
        </div>

        <Image
          width={430}
          height={404}
          src="/images/foto2.png"
          alt="Foto de Perfil Elyon Ortiz"
          className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
        />
      </div>
    </section>
  );
};
