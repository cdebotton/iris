import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const Onedrive = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" ref={ref} {...props}>
      <path
        d="M17.55 11.12a2 2 0 0 1 1.77 2.13 1.85 1.85 0 0 1-1.77 2H7.44a2.47 2.47 0 0 1-2.64-2.67c0-2.31 2.55-2.39 2.55-2.39s.21-2.52 2.44-3a3.23 3.23 0 0 1 3.64 1.4A3 3 0 0 1 16 8.47a2.62 2.62 0 0 1 1.54 2.65"
        fill="#094ab2"
      />
      <path
        d="M4.18 12.59c0-2.55 2.69-2.93 2.69-2.93a3.89 3.89 0 0 1 2.79-3.07A3.52 3.52 0 0 1 13.6 7.9a2.3 2.3 0 0 1 1.33-.26 4.16 4.16 0 0 0-2.59-3.34 3.9 3.9 0 0 0-4.95 1.8 3.09 3.09 0 0 0-2.94 0 3.28 3.28 0 0 0-1.68 3.16A2.49 2.49 0 0 0 .5 11.87 2.61 2.61 0 0 0 3 14.39h1.69a3.25 3.25 0 0 1-.51-1.8"
        fill="#094ab2"
      />
    </svg>
  )
);
