import React, { SFC } from 'react';
import { MenuPanelListItemProps } from './MenuPanelListItemTypes';
import {
  LabelStyled,
  LinkStyled,
  LinkIconWrapperStyled,
  ListItemStyled,
  CheckmarkStyled,
} from './MenuPanelListItemStyled';
import { ParagraphMd } from '../../legacy';

export const MenuPanelListItem: SFC<MenuPanelListItemProps> = ({
  theme = 'light',
  label,
  href = '#',
  linkElement,
  icon,
  isSelected,
  ...menuItemProps
}) => {
  const linkIconElement = icon ? (
    <LinkIconWrapperStyled theme={theme}>
      {icon}
    </LinkIconWrapperStyled>
  ) : null;

  const AnchorTag = props => {
    return <a {...props} />;
  };

  const Element = linkElement || AnchorTag;

  return (
    <ListItemStyled>
      <Element href={href} {...menuItemProps}>
        <LinkStyled theme={theme}>
          {isSelected && <CheckmarkStyled />}
          <LabelStyled>
            {linkIconElement}
            <ParagraphMd
              format={theme === 'dark' ? 'light' : 'dark'}
              element="span"
            >
              {label}
            </ParagraphMd>
          </LabelStyled>
        </LinkStyled>
      </Element>
    </ListItemStyled>
  );
};