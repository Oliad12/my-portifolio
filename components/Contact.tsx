"use client"

import React, { useState, FormEvent } from "react"
import { motion } from "framer-motion"
import { MapPin, Mail, PhoneIncoming } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

type ContactProps = {
  isDark: boolean
}

export const Contact: React.FC<ContactProps> = ({ isDark }) => {
  const [result, setResult] = useState<string>("")

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");

    const form = event.currentTarget
    const formData = new FormData(form)

    formData.append("access_key", "542848fa-9b4e-4931-bae7-07048a3f498f")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const data: { success: boolean; message: string } = await response.json()

      if (data.success) {
        setResult("Form submitted successfully")
        form.reset()
      } else {
        setResult(data.message)
      }
    } catch {
      setResult("Something went wrong. Please try again.")
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='contact'
      className='w-full mt-8 px-[12%] py-10 scroll-mt-20'>
      <div className="flex items-center justify-center mb-12 w-full">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 h-px bg-linear-to-r 
          from-[#0869df] to-[#ff1567]">
          </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="px-6 text-3xl md:text-5xl font-bold font-Ovo text-center">
          Get in touch
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 h-px bg-linear-to-r 
          from-[#ff1567] to-[#0869df]">
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className='flex flex-col gap-6 text-left'>
          <h3 className="text-4xl md:text-5xl font-Ovo font-bold bg-linear-to-r 
          from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent">
            Let’s Talk
          </h3>
          <p className="text-muted-foreground text-lg max-w-md leading-relaxed font-Ovo">
            Feel free to reach out using the details below or send me a message
            through the form.
          </p>

          <div className="space-y-4 text-muted-foreground text-lg">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5" />
              <span>tibebudere22@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <PhoneIncoming className="w-5 h-5" />
              <span>+251 929 165615</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5" />
              <span>Addis Ababa, Ethiopia</span>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={onSubmit}>
          <Card className="border-muted/40 shadow-md hover:border-amber-400">
            <CardContent className="p-6 space-y-4">
              <label className="text-muted-foreground text-purple-500"> Name:</label>
              <Input name="name" placeholder="Enter Your name" required
                className={isDark ? "bg-transparent" : ""} />
                <label className="text-muted-foreground text-purple-500"> Email:</label>
              <Input type="email" name="email" placeholder="Enter Your email" required
                className={isDark ? "bg-transparent" : ""}/>
                <label className="text-muted-foreground text-purple-500"> Message:</label>
              <Textarea name="message" placeholder="Enter Your message" rows={6} required
                className={isDark ? "bg-transparent" : ""}/>

              <motion.button
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                type="submit"
                className="px-3 py-1 w-max flex items-center justify-between gap-2 bg-linear-to-r from-[#9bc1e7] to-[#0e2f13]
                       text-white rounded-full mx-auto hover:scale-105 cursor-pointer transition-transform duration-300'">
                Submit now
              </motion.button>
              {result && (
             <p className='mt-4 text-gray-500 dark:text-gray-400'>{result}</p>
              )}
            </CardContent>
          </Card>
        </motion.form>
      </div>
    </motion.section>
  )
}
