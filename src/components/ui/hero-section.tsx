
"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface HeroProps {
  className?: string;
  gradient?: boolean;
  blur?: boolean;
  title: string;
  subtitle?: string;
  actions?: Array<{
    label: string;
    href: string;
    variant?: "default" | "outline";
  }>;
  titleClassName?: string;
  subtitleClassName?: string;
  actionsClassName?: string;
  imageUrl?: string;
}

const HeroSection = React.forwardRef<HTMLElement, HeroProps>(
  (
    {
      className,
      gradient = true,
      blur = true,
      title,
      subtitle,
      actions,
      titleClassName,
      subtitleClassName,
      actionsClassName,
      imageUrl,
      ...props
    },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative z-0 flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden bg-background py-20 sm:py-28",
          className,
        )}
        {...props}
      >
        {gradient && (
          <div className="absolute top-0 isolate z-0 flex w-screen flex-1 items-start justify-center">
            {blur && (
              <div className="absolute top-0 z-50 h-48 w-screen bg-transparent opacity-10 backdrop-blur-md" />
            )}

            {/* Main glow with MaquiPAY colors */}
            <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-[-30%] rounded-full bg-primary/60 opacity-80 blur-3xl" />

            {/* Lamp effect */}
            <motion.div
              initial={{ width: "8rem" }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
              whileInView={{ width: "16rem" }}
              className="absolute top-0 z-30 h-36 -translate-y-[20%] rounded-full bg-secondary/60 blur-2xl"
            />

            {/* Top line */}
            <motion.div
              initial={{ width: "15rem" }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
              whileInView={{ width: "30rem" }}
              className="absolute inset-auto z-50 h-0.5 -translate-y-[-10%] bg-primary/60"
            />

            {/* Left gradient cone */}
            <motion.div
              initial={{ opacity: 0.5, width: "15rem" }}
              whileInView={{ opacity: 1, width: "30rem" }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              style={{
                backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
              }}
              className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-primary/60 via-transparent to-transparent [--conic-position:from_70deg_at_center_top]"
            >
              <div className="absolute w-[100%] left-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
              <div className="absolute w-40 h-[100%] left-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
            </motion.div>

            {/* Right gradient cone */}
            <motion.div
              initial={{ opacity: 0.5, width: "15rem" }}
              whileInView={{ opacity: 1, width: "30rem" }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              style={{
                backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
              }}
              className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-secondary/60 [--conic-position:from_290deg_at_center_top]"
            >
              <div className="absolute w-40 h-[100%] right-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
              <div className="absolute w-[100%] right-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
            </motion.div>
          </div>
        )}

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ y: 100, opacity: 0.5 }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="relative z-50 flex justify-center flex-1 flex-col gap-4"
            >
              <div className="flex flex-col text-left space-y-6">
                <h2
                  className={cn(
                    "text-3xl md:text-4xl font-bold text-text-primary",
                    titleClassName,
                  )}
                  dangerouslySetInnerHTML={{ __html: title }}
                />
                {subtitle && (
                  <p
                    className={cn(
                      "text-lg text-text-secondary max-w-2xl",
                      subtitleClassName,
                    )}
                  >
                    {subtitle}
                  </p>
                )}
                {actions && actions.length > 0 && (
                  <div className={cn("flex gap-4 flex-wrap", actionsClassName)}>
                    {actions.map((action, index) => (
                      <button
                        key={index}
                        className={cn(
                          "font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105",
                          action.variant === "outline"
                            ? "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                            : "bg-gradient-primary text-white hover:opacity-90 shadow-lg"
                        )}
                      >
                        {action.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>

            {imageUrl && (
              <motion.div
                initial={{ x: 100, opacity: 0.5 }}
                viewport={{ once: true }}
                transition={{ ease: "easeInOut", delay: 0.5, duration: 0.8 }}
                whileInView={{ x: 0, opacity: 1 }}
                className="relative z-50 flex items-center justify-center"
              >
                <img
                  src={imageUrl}
                  alt="MaquiPAY Consultores"
                  className="rounded-xl shadow-2xl max-w-full h-auto"
                />
              </motion.div>
            )}
          </div>
        </div>
      </section>
    )
  },
)
HeroSection.displayName = "HeroSection"

export default HeroSection;
