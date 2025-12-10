"use client";

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import LightRays from '@/components/LightRays';




export default function Page() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/login');
  }
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <LightRays
        raysOrigin="top-center"
        raysColor="#00ffff"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className="custom-rays"
      />
    </div>
  )
}
