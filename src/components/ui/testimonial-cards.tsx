
"use client";

import * as React from 'react';
import { motion } from 'framer-motion';

export interface ConsultantTestimonial {
  id: number;
  testimonial: string;
  author: string;
  avatar: string;
}

export function TestimonialCard({ 
  handleShuffle, 
  testimonial, 
  position, 
  id, 
  author, 
  avatar 
}: ConsultantTestimonial & { 
  handleShuffle: () => void;
  position: string;
}) {
  const dragRef = React.useRef(0);
  const isFront = position === "front";

  return (
    <motion.div
      style={{
        zIndex: position === "front" ? "2" : position === "middle" ? "1" : "0"
      }}
      animate={{
        rotate: position === "front" ? "-6deg" : position === "middle" ? "0deg" : "6deg",
        x: position === "front" ? "0%" : position === "middle" ? "33%" : "66%"
      }}
      drag={true}
      dragElastic={0.35}
      dragListener={isFront}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
      onDragStart={(e: any) => {
        dragRef.current = e.clientX;
      }}
      onDragEnd={(e: any) => {
        if (dragRef.current - e.clientX > 150) {
          handleShuffle();
        }
        dragRef.current = 0;
      }}
      transition={{ duration: 0.35 }}
      className={`absolute left-0 top-0 grid h-[450px] w-[350px] select-none place-content-center space-y-6 rounded-2xl border-2 border-primary/30 bg-surface/80 p-6 shadow-xl backdrop-blur-md ${
        isFront ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <img
        src={avatar}
        alt={`Avatar de ${author}`}
        className="pointer-events-none mx-auto h-32 w-32 rounded-full border-2 border-primary/50 bg-surface object-cover"
      />
      <span className="text-center text-lg italic text-text-secondary">"{testimonial}"</span>
      <span className="text-center text-sm font-medium text-primary">{author}</span>
    </motion.div>
  );
}

export function ShuffleCards({ testimonials }: { testimonials: ConsultantTestimonial[] }) {
  const [positions, setPositions] = React.useState(["front", "middle", "back"]);

  const handleShuffle = React.useCallback(() => {
    setPositions(prevPositions => {
      const newPositions = [...prevPositions];
      const lastPosition = newPositions.pop();
      if (lastPosition) {
        newPositions.unshift(lastPosition);
      }
      return newPositions;
    });
  }, []);

  return (
    <div className="grid place-content-center overflow-hidden px-8 py-12 text-text-primary min-h-[500px] h-full w-full">
      <div className="relative -ml-[100px] h-[450px] w-[350px] md:-ml-[175px]">
        {testimonials.slice(0, 3).map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            {...testimonial}
            handleShuffle={handleShuffle}
            position={positions[index]}
          />
        ))}
      </div>
    </div>
  );
}
