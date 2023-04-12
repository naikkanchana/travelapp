/* eslint-disable prettier/prettier */
import React,{useState} from 'react';
import {Text} from 'react-native';
import styles from './styles';

const Title = ({ text ,style}) => {
 const [textValue,setText] = useState('default value test');

    return (
        <Text style={[styles.title,style]}>{text}</Text>
    );
};

Title.defaultProps = {
    text:'Default Text',
};

export default Title;
