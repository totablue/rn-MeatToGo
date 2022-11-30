import React from "react";
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfo from "../components/RestaurantsInfo";

const RestaurantsScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.search}>
                <Searchbar placeholder="Search" />
            </View>
            <View style={styles.list}>
                <RestaurantInfo />
            </View>
        </SafeAreaView>
    );
};

export default RestaurantsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
    search: {
        padding: 16,
    },
    list: {
        backgroundColor: "blue",
        flex: 1,
        padding: 16,
    },
});
