/* eslint-disable prettier/prettier */
import React, { useState,useEffect } from 'react';
import { SafeAreaView,View,Text,Image, ImageBackground} from 'react-native';
import styles from './styles';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Title from '../../components/Title';
import InfoCard from '../../components/infoCard';

const AttractionDetails = ({navigation,route}) => {

    const {item} = route?.params || {};
    const mainImage = item?.images?.length ? item?.images[0]: null;

    const goBack = ()=>{
        navigation.goBack();
    }

    const onGalleryNavigate = () =>{
        navigation.navigate('Gallery',{images:item?.images})
    }

    const slicedImages = item?.images?.length ? item?.images?.slice(0, 5) : [];
    const diffImages = item?.images?.length - slicedImages?.length;
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground 
                style={styles.mainImage} 
                imageStyle={{borderRadius :20}} 
                source={{uri : mainImage}}
            >
                <View style={styles.header}>
                    <Pressable onPress={goBack} hitSlop={8}>
                        <Image style={styles.icon} source={require('../../assets/back.png')}></Image>
                    </Pressable>
                    <Pressable hitSlop={8}>
                        <Image style={styles.icon} source={require('../../assets/share.png')}></Image>
                    </Pressable>
                </View>

                <Pressable onPress={onGalleryNavigate} style={styles.footer}>
                    {slicedImages?.map((image,index)=>(
                        <View key={image}>
                            <Image source={{uri:image}} style={styles.miniImage}/>
                            {diffImages > 0 && index === slicedImages?.length -1? (
                            <View style={styles.moreImagesContainer}> 
                                <Text style={styles.moreImages}>{`+${diffImages}`}</Text>
                            </View>
                            ):null}
                              
                        </View>
                    ))}
                </Pressable>
                       
            </ImageBackground>
            <View style={styles.headerContainer}>
                <View>
                    <Title style={styles.title} text={item?.name}></Title>
                    <Text style={styles.city} >{item?.city}</Text>
                </View>
                <Title style={styles.title} text={item?.entry_price}></Title>
            </View>

            <InfoCard text={item?.address} icon={require('../../assets/location.png')}/>
            <InfoCard
                text={`OPEN
                ${item?.opening_time} - ${item?.closing_time}`}
                icon={require('../../assets/schedule.png')}
            />
               
                    
        </SafeAreaView>
    );
};

export default React.memo(AttractionDetails);
