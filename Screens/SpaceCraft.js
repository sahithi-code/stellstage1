import React,{Component} from 'react'
import{View,Text} from 'react-native'

export default class SpaceCraftScreen extends Component{
  render(){
    return(
     <View 
        style={{flex:1,
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:"pink"

                    }}>
      <Text
        style={
          {
            fontSize:40,
            fontFamily:'Cursive'
            
          }
        }
      >SpaceCraft</Text>
      </View>
    )
  }
}