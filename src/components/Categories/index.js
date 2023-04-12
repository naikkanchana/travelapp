import { FlatList, TouchableOpacity,Text} from "react-native";
import React from 'react';
import styles from './styles';

const Categories = ({categories,selectedCategories,onCategoryPress})=>{

    console.log('categories data'+categories)
    return(

        <FlatList 
        horizontal
        keyExtractor={item=> String(item)}
        data={categories} 
        // style={{marginRight:-32, borderWidth:1,borderColor: 'yellow'}}
        showsHorizontalScrollIndicator ={false}
        renderItem ={({item,index}) =>{
            const selected= selectedCategories === item;

            return(
                <TouchableOpacity 
                    onPress={()=>onCategoryPress(item)} 
                    style={[styles.itemContainer, selected?styles.selectedItemContainer:{}, index === 0? {marginLeft:32} : {}]}
                >
                    <Text  style={[styles.item,selectedCategories === item?styles.selectedItem : {}]} >{item}</Text>
                </TouchableOpacity>
            )
        }} 
        />

    
    );
}

export default React.memo(Categories);