import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    border-width: 1px;
    border-top-width: 15px;
    border-color:  ${({ theme }) => theme.colors.buttonColor};
    background-color: ${({ theme }) => theme.colors.white};

    width: 80%;
    margin: 10px 0;
    justify-content: space-around;
`;

export const Content = styled(RectButton)`
    padding: 10px 20px;
`;

export const OptionArea = styled.View``;

export const OptionHeaderCompressed = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 38px;
    text-align: center;
`;

export const OptionHeader = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 22px;
    text-align: left;
`;

export const Description = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 14px;
    text-align: left;
    margin: 10px 0;
`;

export const ButtonContent = styled.View`
    align-items: center;
`;

export const PriceContent = styled.View`
    align-items: flex-end;
    margin: 10px 0;
`;

export const Price = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.gray};
    font-size: 32px;
    text-align: right;
    height: 40px;
`;

export const PriceDetails = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.gray};
    font-size: 14px;
    text-align: right;
    height: 20px;
`;

export const Separator = styled.View`
    border-bottom-width: 1px;
    width: 100%;
    border-color: #000;
`;
