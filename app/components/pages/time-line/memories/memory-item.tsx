import Image from 'next/image'
import { RichText } from '@/app/components/rich-text'
import { Memory } from '@/app/types/aboutMe'
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";


type IMemoryProps = {
  memory: Memory
}

export const MemoryItem= ({memory}: IMemoryProps ) => {
  console.log(memory.date)
  const date = new Date(memory.date);
  const formattedDate = format(date, "dd/MM/yyyy", { locale: ptBR }).toString();

  return (
    <section className="container pb-3 flex gap-2 md:gap-4 lg:gap-6 flex-col md:flex-row">
        <div className="flex flex-col flex-1">
          <span className='-ml-8 flex items-center gap-2 pb-8 w-full text-sm text-gray-100 before:h-px before:w-5 before:bg-gray-50'>
            {formattedDate}
          </span>
           <div className="sm:w-full rounded-s-sm">
            <Image
              src={memory.imageMemory.url}
              width={400}
              height={400}
              alt={`logo ${memory.title}`}
              className="rounded-lg" />
          </div>
        </div> 
      
        <div className="flex flex-col flex-1 text-sm pt-6">
          <span className='text-emerald-400 text-xl w-full items-center pt-3 sm:py-6'>{memory.title}</span> 
          <RichText  content={memory.descriptionMemory.raw} />
        </div>    

    </section>
  )
}