import React from 'react';
import { motion } from 'framer-motion';

import { generateUID } from '../../../utils';

export function Motion({
  attach,
  children,
  // duration = 0.2,
  delay = 0,
}) {
  const UID = generateUID();

  attach = attach || children.props.attach;
  let transforms = [{}, {}];

  switch (attach) {
    case 'top':
    case 'top-left':
    case 'top-right':
      transforms = [
        { transform: 'translateY(0%) scale(1) rotate(0deg)' },
        { transform: 'translateY(-9%) scale(0.98) rotate(0deg)' },
      ];
      break;
    case 'right':
    case 'right-top':
    case 'right-bottom':
      transforms = [
        { transform: 'translateX(0%) scale(1) rotate(0deg)' },
        { transform: 'translateX(9%) scale(0.98) rotate(0deg)' },
      ];
      break;
    case 'bottom':
    case 'bottom-left':
    case 'bottom-right':
      transforms = [
        { transform: 'translateY(0%) scale(1) rotate(0deg)' },
        { transform: 'translateY(9%) scale(0.98) rotate(0deg)' },
      ];
      break;
    case 'left':
    case 'left-top':
    case 'left-bottom':
      transforms = [
        { transform: 'translateX(0%) scale(1) rotate(0deg)' },
        { transform: 'translateX(-9%) scale(0.98) rotate(0deg)' },
      ];
      break;
  }

  const variants = {
    initial: {
      opacity: 0,
      ...transforms[1],
      transition: {
        transform: {
          delay,
          type: 'spring',
          bounce: 0.334,
          duration: 0.667,
        },
        opacity: {
          delay,
          type: 'spring',
          duration: 1,
        },
      },
    },
    animate: {
      opacity: 1,
      ...transforms[0],
      transition: {
        transform: {
          delay,
          type: 'spring',
          bounce: 0.334,
          duration: 0.667,
        },
        opacity: {
          delay,
          type: 'spring',
          duration: 1,
        },
      },
    },
    exit: {
      opacity: 0,
      transform: 'translateX(2%) scale(0.8) rotate(0.5deg)',
      transition: {
        transform: {
          delay,
          type: 'spring',
          bounce: 0.334,
          duration: 0.667,
        },
        opacity: {
          delay,
          type: 'spring',
          duration: 0.667,
        },
      },
    },
  };

  return (
    <motion.div
      key={UID}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ transformOrigin: 'center' }}
    >
      {children}
    </motion.div>
  );
}
