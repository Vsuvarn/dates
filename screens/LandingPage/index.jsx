import React from 'react'
import {View,FlatList} from 'react-native'
import Card from './components/Card'
import {heightToDp,widthToDp} from '../styles'

const data = [
    {
        id:1,
        content:'In consequat in veniam veniam qui aliquip aute mollit eiusmod minim laboris officia laborum.'
    },
    {
        id:2,
        content:'Quis aliqua aliqua sint magna dolore ex id sunt laboris enim aliqua incididunt.'
    },
    {
        id:3,
        content:'Culpa ullamco occaecat aute labore nulla et duis ipsum dolor nulla.'
    }
]
function Landing() {
  return (
    <View style={{flex:1}}>
        <FlatList
            data={data}
            renderItem={(item) =>{

                return (<Card data={item.item} index={item.index}/>)
            }}
            keyExtractor={(key)=>key.id}
        />

    </View>
  )
}

export default Landing