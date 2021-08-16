import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const Food = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 32 32" ref={ref} {...props}>
      <g id="food_32">
        <path d="M16,1C7,1,2,6,2,13c0,1.105,0.895,2,2,2h24c1.105,0,2-0.895,2-2C30,6,25,1,16,1z" />
        <polyline points="17,17 12,23 7,17 	" />
        <g>
          <path d="M3,17c-1.657,0-3,1.343-3,3s1.343,3,3,3h5.8L4,17H3z" />
          <path d="M29,17h-9l-4.8,6H29c1.657,0,3-1.343,3-3S30.657,17,29,17z" />
        </g>
        <path d="M28,25H4c-1.105,0-2,0.895-2,2c0,2.209,1.791,4,4,4h20c2.209,0,4-1.791,4-4C30,25.895,29.105,25,28,25z" />
      </g>
    </svg>
  )
);
