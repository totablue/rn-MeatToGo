import React from "react";

import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import open from "../../../../assets/open";
import Spacer from "../../../components/spacer/Spacer";
import Text from "../../../components/typography/Text";
import {
    InfoContainer,
    RestaurantCard,
    RestaurantCardCover,
    Address,
    IconContainer,
    Rating,
    SectionEnd,
    Icon,
} from "./RestauranInfoCard.styled";

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
                <Text variant="label">{name}</Text>
                <IconContainer>
                    <Rating>
                        {ratingArray.map(() => (
                            <SvgXml xml={star} width={20} height={20} />
                        ))}
                    </Rating>
                    <SectionEnd>
                        {isClosedTemporarily ? (
                            <Text variant="error">CLOSED TEMPORARILY</Text>
                        ) : null}
                        <Spacer position={"left"} size={"large"}>
                            {isOpenNow ? (
                                <SvgXml xml={open} width={20} height={20} />
                            ) : null}
                        </Spacer>
                        <Spacer position={"left"} size={"large"}>
                            <Icon source={{ uri: icon }} />
                        </Spacer>
                    </SectionEnd>
                </IconContainer>
                <Address>{address}</Address>
            </InfoContainer>
        </RestaurantCard>
    );
};

export default RestaurantInfoCard;
