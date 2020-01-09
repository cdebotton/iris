import React from 'react';

import { nullStyle, Faux, radii, HiddenMark } from './Input.style';
import { Props } from './Input.types';

import { Label } from '../Shared';
import { Focus } from '../../../utils';
import { Wrapper } from '../Wrapper/Wrapper';

export function Mark({
  autocomplete = true,
  className,
  defaultValue,
  disabled,
  floating = false,
  forwardRef,
  id,
  indeterminate,
  label,
  messages,
  mirror,
  name,
  size = 'md',
  status,
  style = nullStyle,
  theme,
  type,
  value,
  ...props
}: Props) {
  return (
    <Wrapper
      theme={theme}
      status={status}
      messages={messages}
      onKeyUp={a11yKey}
      className={className}
      style={style}
    >
      <div style={{ position: 'relative' }}>
        <HiddenMark
          id={id}
          type={type}
          disabled={disabled}
          ref={forwardRef}
          defaultValue={defaultValue as string | string[]}
          {...props}
        />
        <Label
          htmlFor={id}
          format={status}
          disabled={disabled}
          size={size}
          theme={theme}
          type={type}
          fauxMark={Faux}
          mirror={mirror}
        >
          {label}
        </Label>
        <Faux
          size={size}
          indeterminate={indeterminate}
          type={type}
          theme={theme}
          disabled={disabled}
          mirror={mirror}
        >
          <Focus
            parent={HiddenMark}
            radius={radii[type]}
            theme={theme}
          />
        </Faux>
      </div>
    </Wrapper>
  );
}

function a11yKey({ key, target }) {
  if (key === 'Enter' || key.includes('Arrow')) {
    target.checked = !target.checked;
  }
}
