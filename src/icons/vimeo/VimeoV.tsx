import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const VimeoV = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 17" ref={ref} {...props}>
      <path
        d="m18.7781905 4.00912972c-.0838095 1.80248651-1.3609524 4.27041989-3.8316191 7.40304948-2.5542857 3.2718743-4.7154285 4.9080929-6.48323807 4.9080929-1.09485714 0-2.02190476-.996106-2.77885714-2.9892564-.50533333-1.8266948-1.01085714-3.65338962-1.51638095-5.48008443-.56209524-1.9920244-1.16495238-2.98925639-1.80971429-2.98925639-.14057143 0-.63238095.29162561-1.47447619.87224959l-.88380952-1.12240207c.92704762-.80281492 1.84171428-1.60562984 2.74171428-2.40975838 1.23638096-1.0529674 2.16476191-1.60675581 2.78361905-1.66267887 1.46209524-.13849402 2.36209524.84654 2.7 2.95510204.36476191 2.27482993.61752381 3.68979592.7592381 4.24377199.42171428 1.88730941.88514285 2.83011962 1.39200003 2.83011962.3931428 0 .983619-.61233871 1.7714285-1.83645318.7864762-1.2244898 1.2081905-2.15604035 1.2649524-2.79615295.1121905-1.05672062-.3095238-1.58630073-1.2649524-1.58630073-.4499047 0-.9135238.10208774-1.3904762.30363594.9232381-2.98062397 2.6874286-4.42824302 5.2910477-4.34585972 1.9306666.05592306 2.8405714 1.28998358 2.7295238 3.70218156"
        fill="#17272e"
        fillRule="evenodd"
        transform="translate(.395833 .5625)"
      />
    </svg>
  )
);
