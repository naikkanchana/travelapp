import { StyleSheet,Dimensions } from "react-native";

const{height} = Dimensions.get('window')

const styles = StyleSheet.create({

    container:{
        margin:32
    },

    mainImage:{
        height:height / 2,
        width:'100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%'
    },
    icon:{
        width:32,
        height:32,
        margin:16
    },
    footer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        backgroundColor:'rgba(256,256,256,0.35)',
        paddingHorizontal:8
    },

    miniImage:{
        width:32,
        height:32,
        margin:8,
        borderRadius:15
    },

    moreImages:{

      
        color:'#fff',
        fontWeight:'bold',
        fontSize:20,
        top:12,
        left:10
    },

    moreImagesContainer:{
        position:'absolute',
        backgroundColor:'rgba(0,0,0,0.38)',
        width:40,
        height:40,
        top:8,
        left:4,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    headerContainer :{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:40
    },

    title:{
        color:'#000'
    },

    city:{
        fontSize:20,
        fontWeight:'500',
        color:'#000',
        marginTop:8,
    }
   
})

export default styles;