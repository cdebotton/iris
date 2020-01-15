import styled, { css } from 'styled-components';
import { rgba, rem, tint, shade, em } from 'polished';
// import memoize from 'lodash.memoize';

import { FeaturedIcon } from './FeaturedIcon';

import { a11yColor } from '../../../themes';
import { white } from '../../../color';

const buttonCore = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;

  > span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

function buttonIcon({ size, iconOnly, iconPosition }) {
  return iconOnly
    ? css`
        svg {
          width: ${sizePads[size] / 1.5 + 0.75}rem;
          height: ${sizePads[size] / 1.5 + 0.75}rem;
          display: inline-flex;

          > * {
            fill: currentColor;
          }
        }
      `
    : css`
        svg {
          width: ${sizePads[size] / 1.5 + 1}rem;
          height: ${sizePads[size] / 1.5 + 1}rem;
          display: inline-flex;
          margin: ${iconMargin[iconPosition]};

          > * {
            fill: currentColor;
          }
        }
      `;
}

const iconMargin = {
  left: '0.25rem 0.25rem 0.25rem 0',
  right: '0.25rem 0 0.25rem 0.25rem',
  featured: '0.625rem',
};

// Is this more performant?
// export const ButtonStyled = styled.button.attrs((p: any) => {
//   const style = {
//     ...buttonSizes(p),
//     ...buttonPadding(p),
//     ...buttonShape(p),
//     ...buttonMotion(p),
//   };
//   return { style };
// })``;

export const ButtonChildren = styled.span``;

function buttonLoading({ $loading }) {
  return (
    $loading &&
    css`
      cursor: wait !important;

      svg,
      ${FeaturedIcon}, ${ButtonChildren} {
        opacity: 0;
      }
    `
  );
}

export const ButtonStyled = styled.button<any>`
  ${buttonCore};
  ${buttonIcon};
  ${buttonSizes};
  ${buttonFluid}
  ${buttonPadding};
  ${buttonShape};
  ${buttonMotion};
  ${buttonLoading};
  ${buttonVariants};
`;

function buttonMotion({ theme }) {
  return {
    transition: theme.a11y.motion
      ? 'none'
      : 'all 200ms ease-in-out, font-size 50ms, width none',
  };
}

function buttonPadding({ icon, iconOnly, iconPosition, size }) {
  return !iconOnly
    ? iconButtonPadding(icon, iconPosition, sizePads[size])
    : {
        minWidth: `${sizePads[size] + 1.5}rem`,
        minHeight: `${sizePads[size] + 1.5}rem`,
      };
}

function iconButtonPadding(icon, iconPosition, pad) {
  const minHeight = rem(3);
  const minWidth = `${pad * 4 + 2}rem`;

  switch (icon && iconPosition) {
    case 'left':
      return { padding: '0 1rem 0 0.5rem', minHeight, minWidth };
    case 'right':
      return { padding: '0 0.5rem 0 1rem', minHeight, minWidth };
    case 'featured':
      return {
        padding: `0 ${pad}rem 0 ${pad + 2}rem`,
        minHeight,
        minWidth: `${pad * 12}rem`,
      };
    default:
      return { padding: `0 ${pad}rem`, minHeight, minWidth };
  }
}

function buttonShape({ circular = null }) {
  return circular
    ? { borderRadius: '50%' }
    : { borderRadius: '0.25rem' };
}

// const buttonVariants = memoize(buttonVariantsFn);
// function buttonVariantsFn({ format, variant, theme }) {
function buttonVariants({ format, variant, theme }) {
  const color = theme.formats[format];

  // const { saturation } = parseToHsl(color);
  // const saturateAmount = saturation > 0.33 ? 0.2 : 0;

  const borderWidth = '1px';
  const borderColor = color;
  const hoverColor = tint(0.15, color);
  const activeColor = shade(0.15, color);

  switch (variant) {
    case 'outline':
      return css`
        border: ${borderWidth} solid ${borderColor};
        background: transparent;
        color: ${color};
        &:hover {
          color: ${theme.name === 'light'
            ? shade(0.1, color)
            : tint(0.5, color)};
          background: ${theme.name === 'light'
            ? rgba(activeColor, 0.2)
            : rgba(tint(0.3, activeColor), 0.3)};
        }
      `;
    case 'dashed':
      return css`
        border: ${borderWidth} dashed ${borderColor};
        background: transparent;
        color: ${color};
        &:hover {
          color: ${shade(0.2, color)};
          background: ${rgba(activeColor, 0.2)};
        }
      `;
    case 'minimal':
      return css`
        border: ${borderWidth} solid transparent;
        background: transparent;
        color: ${color};
        &:hover {
          color: ${a11yColor(color)};
          background: ${color};
        }
      `;
    case 'hyperminimal':
      return css`
        border: ${borderWidth} solid transparent;
        background: transparent;
        color: ${color};
        &:hover {
          border: ${borderWidth} solid transparent;
          /* color: hoverColorDark */
          color: ${hoverColor};
        }
      `;
    case 'minimalTransparent':
      return css`
        border: ${borderWidth} solid transparent;
        background: transparent;
        color: ${color};
        &:hover {
          border: ${borderWidth} solid transparent;
          background: ${rgba(color, 0.1)};
          /* color: hoverColorDark */
          color: ${hoverColor};
        }
      `;
    case 'transparent':
      return css`
        background: ${rgba(color, 0.35)};
        color: ${white};
        &:active {
          background: ${rgba(shade(0.2, activeColor), 0.55)};
          transform: scale(0.98);
        }
        &:hover:not(:active) {
          background: ${rgba(tint(0.2, hoverColor), 0.55)};
          /* if: grow */
          /* transform: scale(1.01); */
          /* box-shadow: 0 0 0 0 rgba(black, 0.1); */
        }
      `;
    default:
      return css`
        border: ${borderWidth} solid ${borderColor};
        background: ${color};
        color: ${a11yColor(color)};
        &:active {
          background: ${activeColor};
          transform: scale(0.98);
        }
        &:hover:not(:active) {
          background: ${hoverColor};
          border: ${borderWidth} solid ${hoverColor};
          /* if: grow */
          /* transform: scale(1.01); */
          /* box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1),
        0 8px 8px -6px rgba(0, 0, 0, 0.25); */
        }
      `;
  }
}

// function fluidity(sizes: number | number[]) {
//   const min = rem(Math.min(...sizes));
//   const max = rem(Math.max(...sizes));

//   return css`
//     ${mediaQuery({ min, max })} {
//       width: 100%;
//     }
//   `;
// }

const mediaQuery = ({ min = 0, max, type = 'only screen' }) =>
  !max || min === max
    ? `@media ${type} and (min-width: ${em(min)})`
    : `@media ${type} and (min-width: ${em(
        min,
      )}) and (max-width: ${em(max)})`;

type MediaQuerySize = { min?: number; max?: number };

const fluidWidth = ({ min = 0, max }: MediaQuerySize) => css`
  ${mediaQuery({ min, max })} {
    width: 100%;
  }
`;

const fluidity = (fluid: true | MediaQuerySize) =>
  fluid === true ? fluidWidth({}) : fluidWidth(fluid);

const sizePads = {
  xxs: 0.125,
  xs: 0.25,
  sm: 0.5,
  md: 0.75,
  lg: 1,
  xl: 1.25,
  xxl: 1.5,
};

function buttonFluid({ fluid }) {
  return fluid && fluidity(fluid);
}

function buttonSizes({ size }) {
  switch (size) {
    case 'xxl':
      return {
        fontSize: rem(20),
        lineHeight: 72 / 18,
      };
    case 'xl':
      return {
        fontSize: rem(16),
        lineHeight: 58 / 16,
      };
    case 'lg':
      return {
        fontSize: rem(16),
        lineHeight: 46 / 16,
      };

    case 'md':
      return {
        fontSize: rem(14),
        lineHeight: 38 / 14,
      };

    case 'sm':
      return {
        fontSize: rem(14),
        lineHeight: 30 / 14,
      };

    case 'xs':
      return {
        fontSize: rem(12),
        lineHeight: 23 / 12,
      };
    case 'xxs':
      return {
        fontSize: rem(10),
        lineHeight: 20 / 10,
      };
  }
}