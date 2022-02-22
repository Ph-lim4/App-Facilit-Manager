import styled from 'styled-components/native';
import { white } from '../../../components/colors';
import { w, h } from '../../../components/dimens';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${white};
`;

export const ViewTextEnd = styled.View`
    width : ${w(244)}px;
    align-items: flex-start;
    margin-top: ${h(6)}px;
`;

export const ViewBotton = styled.View`
    position: absolute;
    bottom: ${h(20)}px;
    flex-direction: row;
`;
