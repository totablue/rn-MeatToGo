import React from "react";
import { Text, View, Image } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import styled from "styled-components/native";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

const InfoContainer = styled(View)`
    padding: ${(props) => props.theme.space[3]};
`;

const RestaurantCard = styled(Card)`
    background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
    background-color: white;
    padding: ${(props) => props.theme.space[3]};
`;

const Title = styled.Text`
    color: ${(props) => props.theme.colors.ui.primary};
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: ${(props) => props.theme.fontSizes.body};
`;

const Address = styled(Text)`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.caption};
`;

const IconContainer = styled(View)`
    flex-direction: row;
    padding: ${(props) => props.theme.space[2]} 0;
`;

const Rating = styled(View)`
    flex-direction: row;
`;

const SectionEnd = styled(View)`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
`;

const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = "Some Restaurant",
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = [
            "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
        ],
        address = "100 some random street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true,
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)));

    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover
                key={name}
                source={{ uri: photos[0] }}
            ></RestaurantCardCover>
            <InfoContainer>
                <Title>{name}</Title>
                <IconContainer>
                    <Rating>
                        {ratingArray.map(() => (
                            <SvgXml xml={star} width={20} height={20} />
                        ))}
                    </Rating>
                    <SectionEnd>
                        {isClosedTemporarily ? (
                            <Text variant="label" style={{ color: "red" }}>
                                CLOSED TEMPORARILY
                            </Text>
                        ) : null}
                        <View style={{ paddingLeft: 16 }} />
                        {isOpenNow ? (
                            <SvgXml xml={open} width={20} height={20} />
                        ) : null}
                        <View style={{ paddingLeft: 16 }} />
                        <Image
                            style={{ width: 15, height: 15 }}
                            source={{ uri: icon }}
                        />
                    </SectionEnd>
                </IconContainer>
                <Address>{address}</Address>
            </InfoContainer>
        </RestaurantCard>
    );
};

export default RestaurantInfoCard;
