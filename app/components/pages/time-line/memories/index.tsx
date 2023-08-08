import { MemoryItem } from './memory-item'
import { RxComponentBoolean } from 'react-icons/rx'
import { Memory } from '@/app/types/aboutMe'

type IMemoriesProps = {
  memories: Memory[]
}

export const MemorySection = ({memories}: IMemoriesProps ) => {
  return (
    <section className="container flex flex-row md:flex-row">
      <div className="flex flex-col items-center justify-center">
          <RxComponentBoolean/>
          <div className="h-full w-[1px] bg-gray-400"/>
        </div> 
      <div className="flex flex-col gap-2 py-10">
          {memories?.map(memory=> (
          <MemoryItem
          key={memory.title} 
          memory={memory}/>
          ))}
      </div>
    </section>
  )
}