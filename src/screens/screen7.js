import React, {PureComponent} from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    ScrollView,
    Image,
    Dimensions,
} from 'react-native'
import {
    Divider
} from 'react-native-elements'

import { AntDesign, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

export default class Screen07 extends PureComponent{
    constructor(props){
        super(props)
        this.state={
            clickNumber: 4
        }
    }

    onPressRecording(params) {

    }
    onPressSettings(params) {

    }
    onPressHelpCenter(params) {
        
    }
    render(){
        return(
            <ScrollView style={styles.container}>
                <View style={styles.titleBox} >
                    <Image source={require('../../assets/icons/airbnb.png')} style={{width:42, height:42 }}></Image>
                    <View style={{marginLeft:10, paddingTop:10}}>
                        <Text style={{color:'#231F20', fontSize:14, }}>Question 1 of 12</Text>
                        <Text style={{color:'#231F20', fontSize:10, }}>Your response will be shown to the employer</Text>
                    </View>
                </View>
                <Divider></Divider>
                <View style={styles.bodyBox}>
                    <Text style={{color:'#231F20', fontSize:16, padding:15}}>Explain why you would be a good fit for this position?</Text>
                </View>
                <View style={styles.bodyBox}>
                    <View style={styles.vBox}>
                        <Text style={{color:'#231F20', textAlign:'right', fontSize:12, paddingTop:5}}>Time: 3 min</Text>
                        <View style={{flexDirection:'row', alignContent:'center'}}>
                            <Text style={{color:'#231F20', textAlign:'left', fontSize:10, paddingTop:5, paddingRight:5}}>00:27</Text>
                            <TouchableOpacity style={{backgroundColor:'#F5F5F5', height:20, width:100,borderRadius:5, padding:2}}>
                                <TouchableOpacity style={{backgroundColor:'#00BA52', height:15, width:'70%',borderRadius:5,}}>
                                </TouchableOpacity>    
                            </TouchableOpacity>
                            <Text style={{color:'#231F20', textAlign:'left', fontSize:10, paddingLeft:5, paddingTop:5}}>Prep Time</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.bodyBox}>
                    <Image style={{resizeMode: 'cover', width:'100%'}} source={require('../../assets/images/interview/interview.png')}></Image>
                </View>    
                <View style={styles.vBoxCenter}>
                    <TouchableOpacity
                            style={{alignItems:'center'}}
                        >
                        <Feather name="mic" size={20} color='#001C35'/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:'#F5F5F5', height:20, width:100,borderRadius:5, padding:2}}>
                        <TouchableOpacity style={{backgroundColor:'#001C35', height:15, width:'70%',borderRadius:5,}}>
                        </TouchableOpacity>    
                    </TouchableOpacity>
                </View> 
                <View style={styles.buttonBarBox}>
                    <TouchableOpacity
                            style={{backgroundColor:'#00BA52', borderRadius:5,paddingHorizontal:40, paddingVertical:15, alignItems:'center'}}
                            onPress={()=>{this.onPressRecording()}}
                        >
                        <Text style={{color:'white', textAlign:'center', fontSize:14}}>Start Recording</Text>
                    </TouchableOpacity>
                </View>
                <Divider></Divider>
                <View style={styles.bannerBox}>
                    <TouchableOpacity
                            style={{ width:'48%', paddingHorizontal:10, paddingVertical:15, alignItems:'center'}}
                            onPress={()=>{this.onPressHelpCenter()}}
                        >
                        <View style={{flexDirection: 'row'}}>
                            <AntDesign name="exclamationcircleo" size={20} color='#00BA52'/>
                            <Text style={{color:'#00BA52', textAlign:'center', paddingTop:3, paddingLeft:5}}>Help Center</Text>
                        </View>    
                    </TouchableOpacity>
                    <TouchableOpacity
                            style={{ width:'48%', paddingHorizontal:10, paddingVertical:15, alignItems:'center'}}
                            onPress={()=>{this.onPressSettings()}}
                        >
                        <View style={{flexDirection: 'row'}}>
                            <MaterialCommunityIcons name="settings-outline" size={20} color='#00BA52'/>
                            <Text style={{color:'#00BA52', textAlign:'center', paddingTop:3, paddingLeft:5}}>Settings</Text>
                        </View>    
                    </TouchableOpacity>
                </View>                
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        margin:20,
        backgroundColor: '#F5F5F5'
    },
    titleBox: {
        padding: 10,
        alignItems:'flex-start',
        flexDirection:'row',
        backgroundColor: 'white'
    },
    bodyBox: {
        backgroundColor: 'white',        
    },
    vBox: {
        justifyContent:'space-between',
        flexDirection: 'row',
        margin: 15,
        backgroundColor: 'white'
    },
    vBoxCenter: {
        paddingVertical: 20,
        justifyContent:'center',
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    buttonBarBox: {
        backgroundColor:'white',
        paddingHorizontal:50,
        paddingBottom: 20
    },
    bannerBox: {
        flex:1,
        width:'100%',
        paddingTop:10,
        backgroundColor:'white',
        paddingHorizontal:15,
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingBottom:15
    }
})