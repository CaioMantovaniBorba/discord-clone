import React from 'react';

import ServerButton from '../ServerButton';

import { Container, Separator } from './styles';

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton />
      <ServerButton mentions={4} />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton mentions={8} />
      <ServerButton />
    </Container>
  );
};

export default ServerList;
