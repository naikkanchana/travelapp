/* eslint-disable prettier/prettier */
import React, { useState,useEffect } from 'react';
import { FlatList, SafeAreaView,View,Text} from 'react-native';
import Title from './../../components/Title';
import styles from './styles';
import Categories from '../../components/Categories';
import AttractionCard from '../../components/AttractionCard';
import jsonData from '../../data/attractions.json';
import categories from '../../data/categories.json';
import { useNavigation } from '@react-navigation/native';

const All = 'All';

const Home = () => {

    const navigation = useNavigation();
    const[selectedCategory,setSelectedCategory] = useState(All);
    const[data,setData] = useState([]);
    
    useEffect(()=>{
        setData(jsonData);
    },[])

    useEffect(()=>{
        if(selectedCategory === All)
        {
            setData(jsonData)
        }else
        {
            const filterData = jsonData.filter(item=> item?.categories?.includes(selectedCategory))
            setData(filterData)
        }

    },[selectedCategory])


    return (
        <SafeAreaView style={styles.container}>

                <FlatList 
                data ={data}
                numColumns={2}
                style={{flexGrow:1}}
                ListEmptyComponent={(<Text style={styles.emptyText}>No items found.</Text>)}
                ListHeaderComponent={(

                    <>
                        <View style={{margin:32}}>
                            <Title text="Where do" style={{ fontWeight:'normal' }}/>
                            <Title text="you want to go?" />
                            <Title text="Explore Attraction" style={styles.subtitle} />
                        </View>

                        <Categories selectedCategories = {selectedCategory} 
                            onCategoryPress={setSelectedCategory} 
                            categories={[All,...categories]}
                        />
                    
                    </>
                   
                )}
                    
                keyExtractor={(item)=> String(item?.id)}
                renderItem={({item,index})=>(

                    <AttractionCard 
                    key={item.id}
                    style={index % 2 === 0
                        ?{marginRight:12,marginLeft:32}
                        :{marginRight:32}}
                    
                    title={item.name} 
                    subtitle={item.city}
                    onPress={()=>navigation.navigate('AttractionDetails',{item})}
                    imageSrc={ item.images?.length?item.images[0]:null }/>

                )}  />

        </SafeAreaView>
    );
};

export default React.memo(Home);
