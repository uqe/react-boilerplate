import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: palevioletred;
`;

const SayHello = props => <Title>Hi, {props.name}</Title>;

export default SayHello;
