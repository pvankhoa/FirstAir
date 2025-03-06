import styled from 'styled-components';
import {Row} from "antd";
export const WrapperHeader = styled(Row)`
    padding: 10px 120px;
    background-color: rgb(207, 39, 39);
    align-items: center;
    gap: 10px;
    flex-wrap: nowrap;
`
export const WrapperTextHeader = styled.span`
    font-size: 18px;
    color : #ffff;
    font-weight : bold;
    style-align: left;
    `
export const WrapperHeaderAccount = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    gap: 10px;
    max-width: 200px;
    
`
export const WrapperTextHeaderSmall = styled.span`
    font-size: 12px;
    color: #fff;
    white-space: nowrap;
`
