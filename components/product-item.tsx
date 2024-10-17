import { View, StyleSheet, Image, Text, Button } from "react-native";
import { Product } from '../types/Products';

type Props = {
    product: Product;
}

export const ProductItem = (props: Props) => {
    const handleAddToCart = () => {
        alert("Você está comprando: " + props.product.name)
    }
    return (
        <View style={styles.container}>
            <Image 
                source={{ uri: props.product.image }}
                style={styles.image}
            />
            <View style={styles.info}>
                <Text style={styles.name}>{props.product.name}</Text>
                <Text style={styles.price}>{props.product.price.toFixed(2)}</Text>
                <Button 
                    title="Comprar"
                    onPress={handleAddToCart}
                />
            </View>

        </View> 
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 20,
        paddingLeft: 10,
        paddingRight: 10
    },
    image: {
        width: 100,
        height: 100
    },
    info: {
        flex: 1,
        marginLeft: 20
    },
    name:{
        fontWeight: 'bold',
        fontSize: 21,
        marginBottom: 10
    },
    price:{
        color: '#FF0000',
        fontSize: 16,
        marginBottom: 10
    },
});