import React, {
  cloneElement,
  ReactElement,
  ReactNode,
  useContext,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

import { Motion } from './TourPoint.Motion';

import { amethyst, slate, white } from '../../../color';
import { core } from '../../../tokens';
import { Header, Paragraph, Text } from '../../../typography';
import { themes } from '../../../themes';
import { Button } from '../../../components';
import { useAnchor } from '../../../utils/hooks/useAnchor/useAnchor';
import { generateUID } from '../../../utils';

const delay = (i) => 320 + i * 80 + 'ms';

TourPoint.Motion = Motion;

export const TourContext = React.createContext<any>({
  automated: false,
});

export function Tour({ children, id = null, steps = 2 }) {
  const [active, activeSet] = useState(1);

  if (!id) id = generateUID();

  const value = {
    active,
    activeSet,
    id,
    steps,
    automated: true,
  };

  return (
    <TourContext.Provider value={value}>
      {children}
    </TourContext.Provider>
  );
}

interface Props {
  active?: boolean;
  alt?: string;
  attach?: string;
  children?: ReactElement;
  confirmation?: ReactNode;
  content?: ReactNode;
  dismission?: ReactNode;
  onOpen?: any;
  onClose?: any;
  portal?: boolean;
  src?: string;
  step: number;
  style?: any;
  title?: string;
}

export function TourPoint({
  active = true,
  alt = null,
  attach = 'left',
  children,
  confirmation = 'Got it',
  content,
  onOpen,
  onClose,
  portal = true,
  src,
  step,
  style,
  title,
  ...props
}: Props) {
  const {
    active: tourIndex,
    activeSet: tourIndexSet,
    automated,
    steps,
  } = useContext(TourContext);

  const ref = useRef(null);
  const childrenClone = cloneElement(children, { ref });
  const [styleAnchor, styleChild] = useAnchor(ref, attach);

  const Image = src && (
    <img src={src} alt={alt} style={{ animationDelay: delay(1) }} />
  );

  const Title = title && (
    <Header
      size="3"
      theme={themes.light}
      style={{ animationDelay: delay(2) }}
    >
      {title}
    </Header>
  );

  function stepFn(intent, increment, compare) {
    const nextPoint = compare
      ? compare(tourIndex + increment, steps)
      : null;

    return (event) => {
      if (automated) {
        const e = { ...event, intent };
        console.log(intent, { e });

        onClose?.(e);
        tourIndexSet(nextPoint);
      }
    };
  }

  const lessThan = (a, b) => a < b;
  const greaterThan = (a, b) => a > b;

  const stepBack = stepFn('back', -1, lessThan);
  const stepNext = stepFn('next', 1, greaterThan);
  const dismiss = stepFn('dismiss');

  if (!document.getElementById('iris-portals')) {
    const portal = document.createElement('div');
    portal.id = 'iris-portals';

    document.body.appendChild(portal);
  }

  const confirmationElement =
    typeof confirmation === 'string' ||
    typeof confirmation === 'number' ? (
      <Button
        color={amethyst(600)}
        onClick={stepNext}
        style={{ animationDelay: delay(5) }}
      >
        {confirmation}
      </Button>
    ) : (
      confirmation
    );

  const side = attach.split('-')[0] || attach;
  const margin =
    'margin' + side.charAt(0).toUpperCase() + side.slice(1);

  const childrenTourPoint = (
    <AnimatePresence>
      {active && (
        <div style={{ position: 'absolute', ...styleAnchor }}>
          <div style={{ position: 'absolute', ...styleChild }}>
            <Motion attach={attach}>
              <TourPointStyled
                style={{ ...style, [margin]: '1rem' }}
                {...props}
              >
                {Image}
                {Title}

                <Paragraph
                  size="1"
                  theme={themes.light}
                  style={{ animationDelay: delay(3) }}
                >
                  {content}
                </Paragraph>

                <Footer>
                  <Steps>
                    Step {step} of {steps}
                  </Steps>
                  <Button
                    color={amethyst(600)}
                    variant="minimalTransparent"
                    onClick={dismiss}
                    style={{ animationDelay: delay(4) }}
                  >
                    Dismiss
                  </Button>
                  {confirmationElement}
                </Footer>
                <Caret attach={attach} />
              </TourPointStyled>
            </Motion>
          </div>
        </div>
      )}
    </AnimatePresence>
  );

  const childrenPortal = createPortal(
    childrenTourPoint,
    document.getElementById('iris-portals')
  );

  return (
    <>
      {childrenClone}
      {childrenPortal}
    </>
  );
}

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const Steps = styled(Text)`
  color: ${slate(500)};
  margin-right: auto;
  font-size: 0.75rem;
  letter-spacing: -0.05px;
`;

const TourPointStyled = styled.div`
  position: relative;
  padding: 1rem;
  background: ${white};
  color: ${(core.color.text(0) as any)('light')};
  width: 320px;
  border-radius: 0.5rem;
  border: 0.25rem solid ${amethyst(600)};

  > img {
    width: 100%;
    border-radius: 0.25rem;
    margin-bottom: 1rem;
    width: 280px;
    height: 186.38px;
    background-color: black;
  }
`;

function Caret({ attach = 'left' }) {
  const style = attachPosition(attach);

  return <CaretStyled style={style} />;
}

const CaretStyled = styled.div`
  position: absolute;
  width: 1rem;
  height: 1rem;
  transform: rotate(-45deg);
  background: ${white};
  border: 0.25rem solid ${amethyst(600)};
`;

function caret(side, sideA, sideB, borderSize) {
  return side === sideA || side === sideB ? borderSize : 0;
}

function attachPosition(attach = 'left', distance = 1, size = 0.5) {
  const borderSize = '0.25rem';
  const [side, placement] = attach.split('-');

  const attachSide = distance + size + 'rem';
  const attachCenter = 'calc(50% - ' + size + 'rem)';

  const axisY = side === 'top' || side === 'bottom';

  const shiftProp = placement ? placement : axisY ? 'left' : 'top';
  const shiftVal = placement ? attachSide : attachCenter;

  const border = {
    borderTopWidth: caret(side, 'top', 'left', borderSize),
    borderRightWidth: caret(side, 'right', 'top', borderSize),
    borderBottomWidth: caret(side, 'bottom', 'right', borderSize),
    borderLeftWidth: caret(side, 'left', 'bottom', borderSize),
  };

  const styleSide = {
    [side]: '-0.68rem',
    [shiftProp]: shiftVal,
    borderRadius: '0.125rem',
    ...border,
  };

  return styleSide;
}

// const Grow = keyframes`
//   0% {
//     transform: scale(0, 0.5) rotate(-45deg);
//   }

//   100% {
//     transform: scale(1, 1) rotate(-45deg);
//   }
// `;
