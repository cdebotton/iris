import { useEffect, useLayoutEffect, useState } from 'react';

const useIsomorphicLayoutEffect =
  typeof window === 'undefined' || typeof document === 'undefined'
    ? useEffect
    : useLayoutEffect;

export function useAnchor(ref, attach) {
  const [rect, rectSet] = useState<DOMRect>(new DOMRect());

  const [side, placement] = attach.split('-');

  useIsomorphicLayoutEffect(() => {
    if (ref.current) {
      const rectRef: DOMRect = ref.current.getBoundingClientRect();
      const rectNew = rectRef;

      if (rect.top !== rectNew.top) rectSet(rectNew);
    }
  }, [ref, rect]);

  useIsomorphicLayoutEffect(() => {
    function scrollObserve(event) {
      console.log('scroll');
      if (ref.current) {
        const rectRef: DOMRect = ref.current.getBoundingClientRect();
        const rectNew = rectRef;

        if (rect.top !== rectNew.top) rectSet(rectNew);
      }
    }

    window.addEventListener('scroll', scrollObserve);
    return () => window.removeEventListener('scroll', scrollObserve);
  }, []);

  // useIsomorphicLayoutEffect(() => {
  //   const config = {
  //     attributes: true,
  //     childList: true,
  //     subtree: true,
  //   };

  //   const callback = (mutationsList, observer) => {
  //     // Use traditional 'for loops' for IE 11
  //     for (const mutation of mutationsList) {
  //       if (mutation.type === 'childList') {
  //         console.log('A child node has been added or removed.');
  //       } else if (mutation.type === 'attributes') {
  //         console.log(
  //           'The ' +
  //             mutation.attributeName +
  //             ' attribute was modified.'
  //         );
  //       }
  //     }
  //   };

  //   const observer = new MutationObserver(callback);

  //   if (ref.current) {
  //     observer.observe(ref.current, config);
  //   }

  //   return () => observer.disconnect();
  // });

  const styleAnchor: any = {};
  styleAnchor.width = rect.width;
  styleAnchor.height = rect.height;
  styleAnchor.top = rect.top;
  styleAnchor.left = rect.left;

  const translate = 'translate' + axis(side);
  const amount = 100 * orient(side);
  styleAnchor.transform = translate + '(' + amount + '%)';

  const styleChild: any = {};
  styleChild[side] = 0;
  styleChild[placement] = 0;

  if (!placement) {
    const translate = 'translate' + flip(axis(side));
    const amount = 50 * orient(side) * -1;

    styleChild[placement] = null;
    styleChild[intersect(side)] = '50%';
    styleChild.transform = translate + '(' + amount + '%)';
  }

  return [styleAnchor, styleChild];
}

function orient(side) {
  if (side === 'top' || side === 'left') return 1;
  if (side === 'right' || side === 'bottom') return -1;
}

function axis(position) {
  if (position === 'top' || position === 'bottom') return 'Y';
  if (position === 'right' || position === 'left') return 'X';
}

function intersect(position) {
  if (position === 'top') return 'left';
  if (position === 'right') return 'bottom';
  if (position === 'bottom') return 'right';
  if (position === 'left') return 'top';
}

function flip(position) {
  if (position === 'top') return 'bottom';
  if (position === 'right') return 'left';
  if (position === 'bottom') return 'top';
  if (position === 'left') return 'right';
  if (position === 'X') return 'Y';
  if (position === 'Y') return 'X';
}
