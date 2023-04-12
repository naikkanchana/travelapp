import { StyleSheet,Dimensions } from "react-native";

const {width} = Dimensions.get('window')
const styles = StyleSheet.create({

    card :{
      
       padding:4,
       borderWidth:1,
       borderColor:'#E2E2E2',
       borderRadius:15,
       marginBottom:12
        //marginRight:16,
    },

    image :{
       width: (width -96)/2,
       height:120,
       borderRadius:15
    },

    title :{
       fontSize:12,
       fontWeight:'500',
       margintop:12,
       marginleft:6,
       color:'#000000'
    },

    subtitle:{
        fontSize:10 ,
        fontWeight:'300',
        color:'rgba(0,0,0,0.5)',
        
    }

    ,icon :{
        width:10,
        height:10,
        marginRight:4,
    }
    ,row:{
        flexDirection :'row',
        alignItems:'center',
        marginBottom:12,
        marginleft:6,
        margintop:4
    }

    
   
});

export default styles;