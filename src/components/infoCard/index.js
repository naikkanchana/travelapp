/* eslint-disable prettier/prettier */
import React,{useState} from 'react';
import {Text,View, Image} from 'react-native';
import styles from './styles';

const InfoCard = ({icon, text ,style}) => {
 

    return (
        <View style={styles.container}>
                <Image source={icon} style={styles.icon}></Image>
                <Text style={[styles.title,style]}>{text}</Text>
        </View>
        
    );
};


export default InfoCard;
