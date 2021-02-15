import styled from 'styled-components';

import { Props } from '.';

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  margin-bottom: 8px;
  position: relative;
  cursor: pointer;
  background-color: ${(props) =>
    props.isHome ? 'var(--rocketseat)' : 'var(--primary)'};
  transition: border-radius 0.2s, background-color 0.2s;

  > img {
    height: 24px;
    width: 24px;
  }

  &::before {
    position: absolute;
    top: calc(50% - 4.5px);
    left: -17px;
    height: 9px;
    width: 9px;
    background-color: var(--white);
    border-radius: 50%;
    content: '';
    display: ${(props) => (props.hasNotifications ? 'inline' : 'none')};
  }

  &::after {
    position: absolute;
    bottom: -4px;
    right: -4px;
    height: 16px;
    width: auto;
    background-color: var(--notification);
    padding: 0 4px;
    border-radius: 12px;
    border: 4px solid var(--quaternary);
    text-align: right;
    font-size: 13px;
    font-weight: bold;
    color: var(--white);
    content: '${(props) => props.mentions && props.mentions}';
    display: ${(props) =>
      props.mentions && props.mentions > 0 ? 'inline' : 'none'};
  }

  &.active,
  &:hover {
    border-radius: 16px;
    background-color: ${(props) =>
      props.isHome ? 'var(--rocketseat)' : 'var(--discord)'};
  }
`;
