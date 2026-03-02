"use client";

import { testimonials } from "@/assets/assets";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useRef } from "react";


export default function Testimonials() {
  const autoplay = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
     <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          id='testimonials'
          className='w-full  mt-8 px-[12%] bg-background py-20 scroll-mt-20'>
      <div className="max-w-5xl mx-auto px-5 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What People Say
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Trusted feedback from people I’ve worked with.
          </p>
        </motion.div>

        {/* Carousel */}
        <Carousel
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          className="max-w-3xl mx-auto">
          <CarouselContent>
            {testimonials.map((t, i) => (
              <CarouselItem key={i}>
                <Card className="bg-card/90 border-border/60">
                  <CardContent className="p-7 sm:p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <Avatar className="w-12 h-12 cursor-pointer rounded-full bg-gray-400 hover:scale-110 transition-transform duration-300">
                        <AvatarImage src={t.image} />
                        <AvatarFallback>
                          {t.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>

                      <div>
                        <p className="font-semibold text-foreground">
                          {t.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {t.role}
                        </p>
                      </div>
                    </div>
                    <p className="italic text-muted-foreground leading-relaxed">
                      “{t.message}”
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Arrows only on desktop */}
          <div className="hidden md:block">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </motion.section>
  );
}
