'use client'

import { HiArrowNarrowRight } from "react-icons/hi"
import { Button } from "../button"
import { SectionTitle } from "../section-title"
import { useForm } from 'react-hook-form'
import { TypeOf, z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod' 

const contactFormSchema = z.object({
 name: z.string().min(3).max(100),
 email: z.string().email(),
 message: z.string().min(3).max(150),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export const ContactForm = () => {
  const { handleSubmit, register } = useForm<ContactFormData>({
   resolver: zodResolver(contactFormSchema)
  })
  const onSubmit = (data: ContactFormData) => {
   console.log(data)
  }
  return(
   <section id="contact" className="py-16 px-6 md:py-32 flex items-center justify-center bg-gray-950">
    <div className="w-full max-w-[420px] mx-auto">
     <SectionTitle
       subtitle="contato"
       title="Vamos trabalhar juntos? Entre em contato"
       className="items-center text-center"
     />
     <form 
      className="mt-12 w-full flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
     >
      <input 
       {...register('name')}
       placeholder="Nome"
       className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600 ">
      </input>
      <input  
        {...register('email')}
        placeholder="E-mail"
        className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600 ">
      </input>
      <textarea 
        {...register('message')}
        placeholder="Mensagem"
        maxLength={500}
        className="resize-none w-full h-[138px] bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600 ">
      </textarea>
      <Button className="mt-6 w-max mx-auto shadow-button">
       Enviar mensagem
       <HiArrowNarrowRight /> 
      </Button>
     </form>
    </div>
   </section>
  )
} 