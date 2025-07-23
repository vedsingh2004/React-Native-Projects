import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import axios from 'axios';

const screenWidth = Dimensions.get('window').width;

const Recipes = ({ route, navigation }) => {
  const { searchTerm } = route.params;
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchTerm}`
      );
      const meals = response.data.meals || [];
      setRecipes(meals.slice(0, 15)); // Limit to 15 meals
    } catch (error) {
      console.error('Error fetching recipes:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchRecipeDetails = async (idMeal) => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      );
      const fullRecipe = response.data.meals[0];
      navigation.navigate('RecipeDetail', { recipe: fullRecipe });
    } catch (error) {
      console.error('Error fetching full recipe details:', error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, [searchTerm]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => fetchRecipeDetails(item.idMeal)}
    >
      <Image source={{ uri: item.strMealThumb }} style={styles.image} />
      <Text style={styles.title}>{item.strMeal}</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FF7043" />
        <Text style={styles.loadingText}>Fetching delicious recipes...</Text>
      </View>
    );
  }

  if (recipes.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.noResultText}>
          No recipes found for "{searchTerm}"
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Recipes with "{searchTerm}"</Text>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.idMeal}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Recipes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3E0',
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  heading: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 15,
    color: '#FF5722',
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: '100%',
    height: screenWidth * 0.5,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    paddingVertical: 10,
    color: '#333',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#555',
  },
  noResultText: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginTop: 20,
  },
});
