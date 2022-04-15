import styled from 'styled-components/native';
import { h, w } from '../../dimens';
import { gray } from '../../colors'

export const Line = styled.View`
    height: ${h(1)}px;
    width: ${w(306)}px;
    margin-top: ${h(-18)}px;
    background-color: ${gray};
    margin-bottom: ${h(7)}px
`;

export const Container = styled.View`
    flex-direction: row;

`;
export const Touch = styled.View`
    height: ${h(20)}px;
    width: ${w(280)}px;
    flex-direction: row;
    align-items: center;

`;
export const EditIcon = styled.View`
    border-right: ${w(3)}px;
    position: absolute;
`;



