import React,{Component} from 'react'
import{View,Text} from 'react-native'

export default class Home extends Component{
  render(){
    return(
      <View 
        style={{flex:1,
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:"#08B37C"

                    }}>
      <Text
        style={
          {
            fontSize:40,
            fontFamily:'Cursive',
            color:"pink"
            
          }
        }
      >Home</Text>
      </View>
    )
  }
}





