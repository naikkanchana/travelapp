/* eslint-disable prettier/prettier */
import React from 'react';
import { View, SafeAreaView} from 'react-native';
import Title from './../../components/Title';

const Home = () => {
    console.log('Home Screen')
    return (
        <SafeAreaView>
             <View>
               <Title text="my first Component" />
            </View>
        </SafeAreaView>
    );
};

export default Home;
