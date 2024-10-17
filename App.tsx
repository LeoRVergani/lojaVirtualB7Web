import { SafeAreaView, StyleSheet, Text, View, StatusBar, Image, FlatList } from 'react-native';
import { list } from './data';
import { ProductItem} from './components/product-item'
import { Products } from './types/Products';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image 
        source={require('./assets/hero.jpg')}
        resizeMode='cover'
        style={styles.hero}
      />
      <View style={styles.area}>
        <Text style={styles.h1}>Produtos</Text>
      </View>
      <FlatList 
        data={list}
        renderItem={({ item }: { item: Products}) => (<ProductItem product={item} />)}
        keyExtractor={item => item.id.toString()}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0
  },
  hero: {
    width: '100%',
    height: 128
  },
  area: {
    padding: 10
  },
  h1: {
    fontSize: 24,
    marginBottom: 10
  }
});
