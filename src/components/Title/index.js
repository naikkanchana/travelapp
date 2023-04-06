/* eslint-disable prettier/prettier */
import React,{useState} from 'react';
import { View, Text, SafeAreaView} from 'react-native';
import styles from './styles';

const Title = () => {
 const [textValue,setText] = useState('default value test');

 const onTextPress = ()=>{
    setText('updated state');
 };

    return (
        <Text onPress={onTextPress} style={styles.title}>{textValue}</Text>
    );
};

Title.defaultProps = {
    text:'Default Text',
};

export default Title;
