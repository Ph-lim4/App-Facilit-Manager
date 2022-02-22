import styled from 'styled-components/native';
import { primary_color } from '../../colors'
import { h, w } from '../../dimens';

export const View = styled.View`
    flex-direction: row;
    border-color: ${primary_color};
    border-width: ${h(1)}px;
    align-items : center;
    justify-content : center;
    border-radius : ${h(3)}px;
    padding-left: ${w(10)}px;
`;