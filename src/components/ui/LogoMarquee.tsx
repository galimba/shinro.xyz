"use client";

import Image from "next/image";

interface Logo {
  name: string;
  logo: string;
  width?: number;
}

interface LogoMarqueeProps {
  logos: Logo[];
  /** Speed in seconds for one complete loop */
  duration?: number;
  /** Gap between logos in pixels */
  gap?: number;
}

function LogoItem({ logo, name, width = 120 }: Logo) {
  return (
    <div
      className="logo-item flex-shrink-0 flex items-center justify-center px-6 md:px-10"
      style={{ minWidth: width }}
    >
      <Image
        src={logo}
        alt={name}
        width={width}
        height={40}
        className="logo-treatment h-8 md:h-10 w-auto max-w-[120px] md:max-w-[150px] object-contain"
        draggable={false}
      />
    </div>
  );
}

export function LogoMarquee({
  logos,
  duration = 25,
  gap = 48,
}: LogoMarqueeProps) {
  // Repeat logos enough times to guarantee content fills viewport + animation distance
  // 4 repetitions ensures seamless looping on any screen width
  const repeatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div
      className="logo-marquee-container relative overflow-hidden"
      role="region"
      aria-label="Hardware platform compatibility"
    >
      {/* Edge fade masks */}
      <div className="logo-marquee-fade-left" />
      <div className="logo-marquee-fade-right" />

      {/* Scrolling track with repeated content for seamless loop */}
      <div
        className="logo-marquee-track flex items-center"
        style={
          {
            "--marquee-duration": `${duration}s`,
            gap: `${gap}px`,
          } as React.CSSProperties
        }
      >
        {repeatedLogos.map((logo, index) => (
          <LogoItem
            key={`${logo.name}-${index}`}
            name={logo.name}
            logo={logo.logo}
            width={logo.width}
          />
        ))}
        {/* Duplicate the entire set again for seamless loop */}
        {repeatedLogos.map((logo, index) => (
          <LogoItem
            key={`${logo.name}-dup-${index}`}
            name={logo.name}
            logo={logo.logo}
            width={logo.width}
          />
        ))}
      </div>
    </div>
  );
}
