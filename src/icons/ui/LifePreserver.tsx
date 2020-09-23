import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const LifePreserver = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" ref={ref} {...props}>
      <path
        d="M17.74 16.32a10 10 0 0 0 0-12.64l.47-.47a1 1 0 1 0-1.42-1.42l-.47.47a10 10 0 0 0-12.64 0l-.47-.47a1 1 0 0 0-1.42 1.42l.47.47a10 10 0 0 0 0 12.64l-.47.47a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l.47-.47a10 10 0 0 0 12.64 0l.47.47a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM18 10a7.92 7.92 0 0 1-1.69 4.9l-2.14-2.15a5 5 0 0 0 0-5.5l2.14-2.15A7.92 7.92 0 0 1 18 10zM7 10a3 3 0 1 1 3 3 3 3 0 0 1-3-3zm3-8a7.92 7.92 0 0 1 4.9 1.69l-2.15 2.14a5 5 0 0 0-5.5 0L5.1 3.69A7.92 7.92 0 0 1 10 2zm-8 8a7.92 7.92 0 0 1 1.69-4.9l2.14 2.15a5 5 0 0 0 0 5.5L3.69 14.9A7.92 7.92 0 0 1 2 10zm8 8a7.92 7.92 0 0 1-4.9-1.69l2.15-2.14a5 5 0 0 0 5.5 0l2.15 2.14A7.92 7.92 0 0 1 10 18z"
        fill="#1a2e3b"
      />
    </svg>
  )
);
