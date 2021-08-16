import { CSSProperties, useLayoutEffect } from 'react';
import { generateUID } from '../general/generateUID';
import { IrisComponent } from '../HOCs/withIris';

interface Props {
  className?: string;
  style?: CSSProperties;
}

export function useIrisError(
  { className, style }: Props,
  Component: IrisComponent<any, any> | string,
  errorMessage = null,
  valid
) {
  if (process.env.NODE_ENV !== 'development') return {};
  if (valid) return {};

  const id = 'IrisError-' + generateUID();
  const error = logError(errorMessage, Component);
  const irisError = errorUI(className, style, id);

  /* eslint-disable react-hooks/rules-of-hooks */
  useLayoutEffect(() => (error ? error(id) : undefined));
  /* eslint-enable react-hooks/rules-of-hooks */

  return { irisError, valid };
}

function logError(
  errorMessage,
  Component: IrisComponent<any, any> | string
) {
  return (id) =>
    document &&
    console.error(`@vimeo/iris:`, errorMessage, '\n\n', {
      component: Component,
      element: document.getElementsByClassName(id)[0],
    });
}

function errorUI(className, style, id) {
  className = className ? className + ' ' + id : id;
  style = { ...style, ...errorStyles };

  return { className, style };
}

const errorStyles = {
  border: `0.2rem solid red`,
  borderRadius: `0.5rem`,
  background: `transparent`,
  color: `transparent`,
  padding: `0 3rem`,
  cursor: `not-allowed`,
};
