import React, {PureComponent} from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    TextInput,
    Dimensions,
} from 'react-native'
import {
    Divider
} from 'react-native-elements'
import { Ionicons, Entypo } from '@expo/vector-icons';

export default class Screen06 extends PureComponent{
    constructor(props){
        super(props)
        this.state={
            clickNumber: 4    
        }
    }
    onPressSelectCamera(params) {
        
    }
    onPressSelectMac(params) {

    }
    onPressPlaySpeaker(params) {

    }

    onPressCancel(params) {
        
    }
    onPressStart(params) {
        
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.titleBox} >
                    <Text style={styles.titleText}>Please adjust the input settings below</Text>
                </View>
                <Divider></Divider>
                <View style={styles.itembox}>
                    <Text style={styles.itemLabel}>Choose Camera</Text>   
                    <View style={styles.itemsubbox}> 
                        <TextInput
                                style = {styles.combotext}
                                placeholder={'Mac FaceTime HD'}
                        />
                        <TouchableOpacity
                            style={styles.combobtn}
                            onPress={()=>{this.onPressSelectCamera()}}
                        >
                            <Ionicons name="ios-arrow-down" size={20} color='#CFCFCF'/>
                        </TouchableOpacity>
                    </View>    
                </View>
                <View style={styles.itembox}>
                    <Text style={styles.itemLabel}>Choose Microphone</Text>   
                    <View style={styles.itemsubbox}> 
                        <TextInput
                                style = {styles.combotext}
                                placeholder={'Mac Audio Out'}
                        />
                        <TouchableOpacity
                            style={styles.combobtn}
                            onPress={()=>{this.onPressSelectMac()}}
                        >
                            <Ionicons name="ios-arrow-down" size={20} color='#CFCFCF'/>
                        </TouchableOpacity>
                    </View>    
                </View>
                <View style={styles.iconbtn}>
                    <TouchableOpacity
                        onPress={()=>{this.onPressPlaySpeaker()}}
                    >
                        <Entypo name="controller-play" size={30} color='#00BA52'/>
                    </TouchableOpacity>
                    <Text style={{color:'#00BA52'}}>Test Speakers</Text>   
                </View>
                <View style={styles.bannerBox}>
                    <TouchableOpacity
                            style={{backgroundColor:'#EEEEEE', width:'48%', borderRadius:5,paddingHorizontal:40, paddingVertical:15, alignItems:'center'}}
                            onPress={()=>{this.onPressCancel()}}
                        >
                        <Text style={{color:'#828282', textAlign:'center'}}>Cancal</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                            style={{backgroundColor:'#00BA52', width:'48%', borderRadius:5,paddingHorizontal:40, paddingVertical:15, alignItems:'center'}}
                            onPress={()=>{this.onPressStart()}}
                        >
                        <Text style={{color:'#FFFFFF', textAlign:'center'}}>Update</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white'
    },
    titleBox: {
        height: 60, 
        paddingTop: 20,
        paddingLeft: 15,
        alignItems: 'flex-start',
        backgroundColor: '#f5f5f5'
    },
    titleText: {
        color:'#6d6d6d'
    },
    itemLabel: {
        flex:0,
        fontSize:14,
        textAlign: 'left',
        color:'#231F20',
        paddingBottom:10
    },
    itembox: {
        margin: 15,
        justifyContent: 'flex-start',
        borderRadius:4        
    },
    itemsubbox: {
        justifyContent:'space-between',
        flexDirection: 'row',
        alignItems:'center',
        backgroundColor:'#F1F2F2'
    },
    combotext: {
        padding:5,
        width:'90%',
        height:40,
        fontSize: 15,
        color: '#D1D3D4'
    },
    combobtn:{
        width:'10%',
        paddingRight: 5,
        alignItems:'flex-end',
        marginRight: 0
    },      
    iconbtn:{
        margin: 15,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems:'center'
    },
    bannerBox:{
        flex:1,
        width:'100%',
        paddingHorizontal:15,
        position:'absolute',
        bottom:0,
        flexDirection: 'row',
        justifyContent:'space-between',
        marginBottom:15
    },
})