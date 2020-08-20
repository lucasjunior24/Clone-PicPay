import React from 'react';

import { Container, Option, Title, Img } from './styles';

import img8 from '../../images/08.png';

export default function Tips() {
    return (
        < Container>
            <Option bgColor="#172c4a">
                <Title>Page suas contas sem sair de casa</Title>

                <Img source={img8} />
            </Option>
        </Container>
    )
}