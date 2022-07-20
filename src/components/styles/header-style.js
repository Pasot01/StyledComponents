import styled from 'styled-components';

export const StyleHeader = styled.header`
    text-align: center;
    // background-color: #ebfbff;
    // background-color: ${(props) => props.bg};
    background-color: ${({ bg }) => bg};
    padding 40px 0;

    // ##### css imbriqué #####
    // h1 {
    //     color: red;
    // }

    // &:hover {
    //     background-color: 
    // }
`