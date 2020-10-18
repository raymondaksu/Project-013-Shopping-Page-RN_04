import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

// {
//     "id": 1,
//     "title": "General Mobile GM 20",
//     "imgURL": "https://m.media-amazon.com/images/I/51lK00mvFaL._AC._SR180,230.jpg",
//     "price": "₺1.810,21",
//     "inStock": true
// }

const SearchBar = (props) => {
  const [text, setText] = React.useState("");
  const sendValue = () => {
    props.getName(text);
  };
    return (
        <View style={styles.searchBar}>
            <TextInput
              value={text}
              placeholder="Search a product..."
              onChangeText={(val) => {
              setText(val);
              sendValue();
              }}
            />
        </View>
    )
}

export { SearchBar }

const styles = StyleSheet.create({
      searchBar: {
        backgroundColor: "#eceff1",
        padding: 8,
        margin: 5,
        borderRadius: 10
    }
})