import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const Experimental = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 32 32" ref={ref} {...props}>
      <g id="experimental_32">
        <polygon points="20,14 31,15 32,3 21,2 	" />
        <g>
          <path
            d="M15.93,14.741C17.222,13.183,18,11.183,18,9c0-4.971-4.029-9-9-9S0,4.029,0,9c0,4.726,3.645,8.594,8.276,8.963L9,10
				L15.93,14.741z"
          />
          <path d="M28,23l-12.07-8.259C14.279,16.732,11.788,18,9,18c-0.244,0-0.484-0.017-0.724-0.037L7,32L28,23z" />
        </g>
      </g>
    </svg>
  )
);
