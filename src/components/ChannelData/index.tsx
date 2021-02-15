import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author='Caio Mantovani Borba'
            date='20/03/2020'
            content='Hoje é o meu aniversário!'
          />
        ))}

        <ChannelMessage
          author='Amilton Martins Júnior'
          date='20/03/2020'
          content={
            <>
              <Mention>@Caio Mantovani Borba</Mention>, me carrega no Fortnite
              de novo por favor?
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type='text' placeholder='Conversarem #chat-livre' />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
