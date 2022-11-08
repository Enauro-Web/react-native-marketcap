import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";

const CoinItem = ({ coin }) => {
  return (
    <View style={styles.containerItem}>
      <View style={styles.coinNames}>
        <Image source={{ uri: coin.image }} style={styles.image} />
        <View style={styles.containerNames}>
          <Text style={styles.text}>{coin.name}</Text>
          <Text style={styles.symbol}>{coin.symbol}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.textPrice}>${coin.current_price}</Text>
        <Text style={[styles.pricePercentage, coin.price_change_percentage_24h>0 ? styles.changeUp : styles.changeDown]}>{coin.price_change_percentage_24h}%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: "#121212",
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  coinNames: {
    flexDirection: "row",
  },
  containerNames: {
    marginLeft: 10,
  },
  text: {
    color: "#ffffff",
  },
  image: {
    width: 30,
    height: 30,
  },
  symbol: {
    color: "#434343",
    textTransform: "uppercase",
  },
  textPrice:{
    color:'#ffffff',
    textAlign:'right'
  },
  pricePercentage:{
    color:'#ffffff',
    textAlign:'right'
  },
  changeUp: {
    color:'#00b5b9'
  },
  changeDown: {
    color:'#fc4452'
  },
});

export default CoinItem;
