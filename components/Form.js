import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native';

const Form = () => {
    <View>
        <Text style={styles.header}>Open Weather App</Text>
        <TextInput 
            onChangeText={props.onChangeText}
            keyboardAppearance='dark'
            style={styles.textInput}
            placeholder='input a city name.'
            onEndEditing={props.onSubmit}
        />
    </View>
}

const styles = StyleSheet.create( {
    header: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        width: '100%'
    },
    textInput: {
        width: 300,
        height: 40,
        borderColor: 'gray',
        borderWidth: 2,
        padding: 5
    }, 
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 50
    }
});

export default Form;