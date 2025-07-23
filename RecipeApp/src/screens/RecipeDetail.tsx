import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const RecipeDetail = ({ route }) => {
  const { recipe } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: recipe.strMealThumb }} style={styles.image} />
      <Text style={styles.title}>{recipe.strMeal}</Text>
      <Text style={styles.subtitle}>Category: {recipe.strCategory}</Text>
      <Text style={styles.subtitle}>Area: {recipe.strArea}</Text>
      <Text style={styles.instructions}>{recipe.strInstructions}</Text>
    </ScrollView>
  );
};

export default RecipeDetail;

const styles = StyleSheet.create({
  container: { padding: 10,backgroundColor: '#FFF9C4' },
  image: { width: '100%', height: 250, borderRadius: 10 },
  title: { fontSize: 24, fontWeight: 'bold', marginVertical: 10 },
  subtitle: { fontSize: 16, color: 'gray', marginBottom: 5 },
  instructions: { marginTop: 15, fontSize: 16 },
});
