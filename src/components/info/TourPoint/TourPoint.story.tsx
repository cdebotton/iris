import React, { forwardRef, useContext, useState } from 'react';

import { Story } from '@storybook/react';

import { Tour, TourPoint, TourContext } from './TourPoint';

import { Button } from '../../../components';
import { Header } from '../../../typography';

export default {
  title: 'Components/Info/TourPoint',
  component: TourPoint,
  argTypes: {
    icon: { control: { disable: true } },
    onClose: { control: { disable: true } },
    target: { control: { disable: true } },
  },
};

type Props = any;

new Image().src = 'http://placekitten.com/320/213';

const Template: Story<Props> = (args) => {
  return (
    <div
      style={{
        padding: '7rem',
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
        height: '500px',
      }}
    >
      <TourPoint
        {...args}
        active={true}
        attach="left"
        src="http://placekitten.com/320/213"
        step={1}
        title="A Fresh New Look"
        content="All the leaves are brown and the sky is grey, I've been for a walk on a winters day."
      >
        <Card>1</Card>
      </TourPoint>
    </div>
  );
};

export const Controls = Template.bind({});
Controls.storyName = 'TourPoint';
Controls.args = {
  // format: 'positive',
};

const sides = {
  X: ['right', 'left'],
  Y: ['top', 'bottom'],
};
const positions = {
  X: [null, 'top', 'bottom'],
  Y: [null, 'left', 'right'],
};

const attachs = ['X', 'Y'].flatMap((axis) =>
  sides[axis].flatMap((side) =>
    positions[axis].map((position) =>
      position ? side + '-' + position : side
    )
  )
);

export function Active() {
  const [active, activeSet] = useState(true);

  return (
    <>
      <Button onClick={() => activeSet((active) => !active)}>
        toggle
      </Button>
      <div
        style={{
          padding: '7rem',
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
          height: '500px',
        }}
      >
        <TourPoint
          active={active}
          attach="left"
          src="http://placekitten.com/320/213"
          step={1}
          title="A Fresh New Look"
          content="All the leaves are brown and the sky is grey, I've been for a walk on a winters day."
        >
          <Card>1</Card>
        </TourPoint>
      </div>
    </>
  );
}

export function Sequence() {
  function Children() {
    const { active, activeSet, automated, steps } =
      useContext(TourContext);

    return (
      <>
        <Button onClick={() => activeSet(1)}>Restart</Button>
        <TourPoint
          attach="left-top"
          title="A Fresh New Look"
          src="http://placekitten.com/320/213"
          step={1}
          content="All the leaves are brown and the sky is grey, I've been for a walk on a winters day."
        >
          <Card>1</Card>
        </TourPoint>
        <TourPoint
          attach="left-top"
          title="A Fresh New Look"
          src="http://placekitten.com/320/213"
          step={2}
          content="All the leaves are brown and the sky is grey, I've been for a walk on a winters day."
        >
          <Card>2</Card>
        </TourPoint>
        <TourPoint
          attach="left-top"
          title="A Fresh New Look"
          src="http://placekitten.com/320/213"
          step={3}
          content="All the leaves are brown and the sky is grey, I've been for a walk on a winters day."
        >
          <Card>3</Card>
        </TourPoint>
      </>
    );
  }

  return (
    <Tour steps={3}>
      <Children />
    </Tour>
  );
}

export function Attach() {
  function Children() {
    const { active, activeSet, automated, steps } =
      useContext(TourContext);

    return (
      <>
        <Button onClick={() => activeSet(1)}>Restart</Button>
        <div
          style={{
            padding: '3rem',
            alignItems: 'flex-start',
          }}
        >
          {attachs.map((attach, i) => (
            <TourPoint
              attach={attach}
              content="All the leaves are brown and the sky is grey, I've been for a walk on a winters day."
              key={i}
              src="http://placekitten.com/320/213"
              step={i + 1}
              title="A Fresh New Look"
            >
              <Card>{attach}</Card>
            </TourPoint>
          ))}
        </div>
      </>
    );
  }

  return (
    <Tour steps={attachs.length}>
      <Children />
    </Tour>
  );
}

const Card: any = forwardRef(({ children }, ref: any) => {
  return (
    <div
      ref={ref}
      style={{
        width: '12rem',
        height: '12rem',
        background: 'rgba(150,150,150,0.5)',
        padding: '1rem',
        borderRadius: '0.25rem',
        margin: '4rem auto',
      }}
    >
      <Header size="3">{children}</Header>
    </div>
  );
});
