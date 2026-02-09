import React, { useMemo, useState } from 'react';

export type ResumeTimelineItem = {
  period?: string;
  year: string;
  role: string;
  company: string;
  logoSrc?: string;
};

type ResumeTimelineProps = {
  items: ResumeTimelineItem[];
  defaultYear?: string;
};

export function ResumeTimeline({ items, defaultYear }: ResumeTimelineProps) {
  const defaultIndex = useMemo(() => {
    if (!defaultYear) return 0;
    const index = items.findIndex((item) => item.year === defaultYear);
    return index >= 0 ? index : 0;
  }, [defaultYear, items]);

  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  if (!items.length) return null;

  return (
    <div className="relative w-full">
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 border-t border-[rgba(255,255,255,0.14)]" />

      <div
        className="grid w-full"
        style={{
          gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))`
        }}
      >
        {items.map((item, index) => {
          const active = index === activeIndex;
          const showTop = index % 2 === 1;
          const periodText = item.period?.trim() ? item.period : '\u00A0';

          const content = (
            <div
              className={`w-full min-w-0 rounded-xl px-3 py-3 transition-colors ${
                active
                  ? 'bg-[#0B0F14]/55 border border-[rgba(77,163,255,0.35)]'
                  : 'bg-transparent border border-transparent group-hover:bg-[#0B0F14]/35 group-hover:border-[rgba(255,255,255,0.08)]'
              }`}
            >
              <div className="text-[11px] leading-[14px] text-[#9AA6B2] mb-2">{periodText}</div>
              <div
                className={`text-[32px] leading-none font-semibold tracking-tight transition-colors ${
                  active ? 'text-[#4DA3FF]' : 'text-[#E9EEF5]'
                }`}
              >
                {item.year}
              </div>

              {item.logoSrc ? (
                <img
                  src={item.logoSrc}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  className="mt-3 h-9 w-full object-contain"
                  style={{
                    filter: 'invert(1) grayscale(1) brightness(1.9) contrast(1.05)',
                    mixBlendMode: 'screen'
                  }}
                />
              ) : null}

              <div className="mt-3 text-[14px] leading-[18px] font-semibold text-[#E9EEF5] line-clamp-2">
                {item.role}
              </div>
              <div className="mt-1 text-[12px] leading-[16px] text-[#9AA6B2] whitespace-normal break-words">
                {item.company}
              </div>
            </div>
          );

          return (
            <button
              key={`${item.year}-${item.role}-${item.company}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-current={active ? 'true' : undefined}
              className="group relative min-w-0 px-1 py-2 outline-none focus-visible:ring-2 focus-visible:ring-[#4DA3FF]/70 rounded-xl"
            >
              <div className="relative h-[380px] flex flex-col items-center">
                <div className="h-[170px] w-full flex items-end justify-center pb-4">
                  {showTop ? content : null}
                </div>

                <div className="relative h-[40px] w-full flex items-center justify-center">
                  <div
                    className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full transition-colors ${
                      active ? 'bg-[#4DA3FF]' : 'bg-[rgba(255,255,255,0.28)] group-hover:bg-[#4DA3FF]'
                    }`}
                  />
                  <div
                    className={`absolute left-1/2 top-1/2 w-px transition-colors bg-[rgba(255,255,255,0.14)] ${
                      showTop
                        ? 'h-[112px] -translate-x-1/2 -translate-y-[112px]'
                        : 'h-[112px] -translate-x-1/2'
                    }`}
                  />
                </div>

                <div className="h-[170px] w-full flex items-start justify-center pt-4">
                  {!showTop ? content : null}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
