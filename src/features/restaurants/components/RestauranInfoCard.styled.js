import { Card } from "react-native-paper";
import styled from "styled-components/native";

export const InfoContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};
    margin-bottom: ${(props) => props.theme.space[3]};
`;

export const RestaurantCardCover = styled(Card.Cover)`
    background-color: ${(props) => props.theme.colors.bg.primary};
    padding: ${(props) => props.theme.space[3]};
`;

export const Address = styled.Text`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const IconContainer = styled.View`
    flex-direction: row;
    padding: ${(props) => props.theme.space[2]} 0;
`;

export const Rating = styled.View`
    flex-direction: row;
`;

export const SectionEnd = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
`;

export const Icon = styled.Image`
    width: 15px;
    height: 15px;
`;
