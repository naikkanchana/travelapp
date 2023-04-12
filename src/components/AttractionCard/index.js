import {View,Image,Text} from "react-native";
import React from 'react';
import styles from './style';
import { TouchableOpacity } from "react-native-gesture-handler";

const AttractionCard = ({imageSrc, title,subtitle,style,onPress})=>{

    
    
    return(
        <TouchableOpacity onPress={onPress}  style={[styles.card,style]}>
            <Image style = {styles.image} source={{uri:imageSrc}}/>
            <Text style={styles.title}>{title}</Text>
            <View style = {styles.row}>
                <Image style={styles.icon} source={require('../../assets/location.png')}/>
                 <Text style={styles.subtitle}>{subtitle}</Text>
                 
            </View>
            
            
        </TouchableOpacity>
     
    );
}

export default React.memo(AttractionCard);