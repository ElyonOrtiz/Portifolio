'use client'

import { HiArrowNarrowRight } from "react-icons/hi"
import { Button } from "../button"
import { SectionTitle } from "../section-title"
import { useForm } from 'react-hook-form'
import { TypeOf, z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod' 
import axios from "axios"
import { toast } from "react-hot-toast"
import { motion } from "framer-motion"
import { fadeUpAnimation } from "@/app/lib/animation"

const contactFormSchema = z.object({
 name: z.string().min(3).max(100),
 email: z.string().email(),
 message: z.string().min(3).max(150),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export const ContactForm = () => {
  const { 
    handleSubmit, 
    register, 
    reset, 
    formState: {isSubmitted }
  } = useForm<ContactFormData>({
   resolver: zodResolver(contactFormSchema)
  })
  const onSubmit = async (data: ContactFormData) => {
    try {
      await axios.post('/api/contact', data)
      toast.success('Mensagem enviada com sucesso!')
      reset()
    } catch {
        toast.error('Ocorreu um error ao enviar mensagem, tente novamente!')      
    }
  }
  return(
   <section id="contact" className="py-16 px-6 md:py-32 flex items-center justify-center bg-gray-950">
    <div className="w-full max-w-[420px] mx-auto">
     <SectionTitle 
       subtitle="contato"
       title="Vamos trabalhar juntos? Entre em contato"
       className="items-center text-center"
     />
     <motion.form 
      className="mt-12 w-full flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
      {...fadeUpAnimation}
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
     <div className="mt-6 mx-auto ">
     <Button className="shadow-button" disabled={isSubmitted}>
       Enviar mensagem
       <HiArrowNarrowRight /> 
      </Button>
     </div>
     </motion.form>
    </div>
   </section>
  )
} 