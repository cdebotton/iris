import React, { Ref, SVGAttributes, forwardRef } from 'react';

export const Behance = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
    return (
      <svg viewBox="0 0 20 20" ref={ref} {...props}>
        <path
          fill="#474747"
          d="M6.2 13.4c.2 0 .5 0 .7-.1.2 0 .4-.1.6-.2.2-.1.3-.3.4-.5 0-.2.1-.4.1-.7 0-.6-.2-1-.5-1.2-.3-.2-.8-.4-1.3-.4H3.5v3.1h2.7zM6 8.6c.4 0 .8-.1 1.1-.3.3-.2.4-.6.4-1 0-.3 0-.5-.1-.7-.1-.2-.2-.3-.4-.4-.1-.1-.3-.2-.5-.2s-.5-.1-.7-.1H3.5v2.6l2.5.1zM6.3 4c.5 0 1 0 1.5.1.4.1.8.3 1.1.5.3.2.6.5.7.9.2.4.3.8.3 1.3 0 .6-.1 1-.4 1.4-.2.4-.6.7-1.1 1 .7.2 1.2.6 1.6 1.1.3.5.5 1.1.5 1.8 0 .6-.1 1.1-.3 1.5-.2.4-.5.8-.9 1-.4.2-.9.4-1.3.5-.5.1-1 .2-1.5.2H1V4h5.3z"
        />
        <path
          fill="#474747"
          d="M16.2 8.8c-.3-.3-.7-.4-1.2-.4-.4 0-.7.1-.9.2-.2.1-.4.3-.6.5l-.3.6c-.1.2-.1.4-.1.5h3.7c-.2-.6-.4-1.1-.6-1.4m-2.6 4.3c.3.3.8.5 1.5.5.5 0 .8-.1 1.2-.3.3-.2.5-.5.6-.7h2c-.3 1-.8 1.7-1.5 2.1-.7.4-1.4.6-2.4.6-.6 0-1.2-.1-1.7-.3-.5-.2-1-.5-1.3-.9-.4-.4-.6-.8-.8-1.4-.2-.5-.3-1.1-.3-1.7 0-.6.1-1.2.3-1.7.2-.5.5-1 .9-1.4.4-.4.8-.7 1.3-.9.5-.2 1.1-.3 1.7-.3.7 0 1.3.1 1.8.4.5.3.9.6 1.3 1.1.3.5.6 1 .7 1.6.1.6.2 1.2.2 1.8h-5.9c-.1.7.1 1.2.4 1.5"
        />
        <path fill="#474747" d="M12.7 5.8h4.6V4.6h-4.6z" />
      </svg>
    );
  }
);
