import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname='Caio Mantovani Borba' />

      <Role>Offline - 15</Role>
      <UserRow nickname='Amilton Martins Júnior' isBot />
      <UserRow nickname='Fulano' />
      <UserRow nickname='Fulano' />
      <UserRow nickname='Fulano' />
      <UserRow nickname='Fulano' />
      <UserRow nickname='Fulano' />
      <UserRow nickname='Fulano' />
      <UserRow nickname='Fulano' />
      <UserRow nickname='Fulano' />
      <UserRow nickname='Fulano' />
      <UserRow nickname='Fulano' />
      <UserRow nickname='Fulano' />
      <UserRow nickname='Fulano' />
      <UserRow nickname='Fulano' />
      <UserRow nickname='Fulano' />
    </Container>
  );
};

export default UserList;
