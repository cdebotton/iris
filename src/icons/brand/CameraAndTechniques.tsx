import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const CameraAndTechniques = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 32 32" ref={ref} {...props}>
      <g id="camera_and_techniques_32">
        <path d="M6,3c0-0.552-0.448-1-1-1H3C2.448,2,2,2.448,2,3v1h4V3z" />
        <path
          d="M28,6h-1l-1.447-2.894C25.214,2.428,24.521,2,23.764,2h-5.528c-0.758,0-1.45,0.428-1.789,1.106L15,6H2C0.895,6,0,6.895,0,8
			v20c0,1.105,0.895,2,2,2h4c1.105,0,2-0.895,2-2h20c2.209,0,4-1.791,4-4V10C32,7.791,30.209,6,28,6z M10,25c0,0.552-0.448,1-1,1
			s-1-0.448-1-1V9c0-0.552,0.448-1,1-1s1,0.448,1,1V25z M21,23c-3.314,0-6-2.686-6-6s2.686-6,6-6s6,2.686,6,6S24.314,23,21,23z"
        />
      </g>
    </svg>
  )
);
