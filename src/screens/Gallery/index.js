/* eslint-disable prettier/prettier */
import React, { useState,useEffect } from 'react';
import { SafeAreaView,View,Text,Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import { FlatList } from 'react-native-gesture-handler';


const Gallery = ({navigation,route}) => {


    const {images} = route?.params || {};
    const goBack =() =>{
        navigation.goBack();
    }


    console.log('images'+images)
    return (
        <SafeAreaView style={styles.container}>

            <FlatList data={images} renderItem={({item})=>(
                <Image  source={{uri:item}} style={styles.image}/>
            )}/>

            <TouchableOpacity onPress={goBack} style={styles.backContainer}>
                <Image  source={require('../../assets/back.png')} style={styles.backIcon}/>
            </TouchableOpacity>          
        </SafeAreaView>
    );
};

export default React.memo(Gallery);
