import React, {PureComponent} from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
} from 'react-native'
import {
    Divider
} from 'react-native-elements'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import Svg, {Path} from 'react-native-svg'

export default class Screen05 extends PureComponent{
    constructor(props){
        super(props)
        this.state={
            clickNumber: 4
        }
    }
    onPressStart(params) {
        
    }
    onPressPractice(params) {

    }
    onPressSettings(params) {

    }
    onPressHelpCenter(params) {
        
    }
    render(){
        return(
            <View style={{backgroundColor:'#f5f5f5', flex:1}}>
                <View style={styles.container}>
                    <View style={styles.titleBox} >
                        <Image source={require('../../assets/icons/airbnb.png')} style={{width:71, height:71, marginVertical:40}}></Image>
                        <Text style={{color:'#231F20', textAlign:'center', fontSize:18, paddingVertical:10}}>Hello John!</Text>
                        <Text style={{color:'#231F20', textAlign:'center', fontSize:14, paddingVertical:10}}>You’re about to take the interview for Product Manager position at
        Airbnb Berlin.</Text>
                    </View>
                    <Divider></Divider>
                    <View style={styles.bodyBox}>
                        <View style={styles.vBox}>
                            <View style={{flexDirection:'row', alignContent:'center'}}>
                                <Svg width="23" height="22">
                                    <Path 
                                    d="M13.919,22c-.3,0-.6-.015-.89-.043a9.1,9.1,0,0,1-5.52-2.6,8.952,8.952,0,0,1-2.066-3.184h-3.2a.447.447,0,1,1,0-.895h2.91a9.148,9.148,0,0,1-.28-1.721h-2a.448.448,0,1,1,0-.9H4.862a9.1,9.1,0,0,1,.222-1.721H.449a.448.448,0,1,1,0-.9h4.89a8.883,8.883,0,0,1,.8-1.72H3.512a.448.448,0,1,1,0-.9h3.2l.033,0a9.193,9.193,0,0,1,.763-.862,9.054,9.054,0,0,1,4.423-2.425V3A1.521,1.521,0,0,1,12.3,0h3.235A1.521,1.521,0,0,1,15.9,3V4.136a9.03,9.03,0,0,1,5.638,13.74.449.449,0,1,1-.753-.488A8.168,8.168,0,0,0,8.145,7.2,8.163,8.163,0,0,0,18.382,19.791a.449.449,0,0,1,.685.467.449.449,0,0,1-.2.284A9.066,9.066,0,0,1,13.919,22ZM12.832,3.044v.941a9.237,9.237,0,0,1,1.093-.065,9.135,9.135,0,0,1,1.082.064V3.044ZM12.3.9a.626.626,0,1,0,0,1.253h3.235a.626.626,0,1,0,0-1.253Z"/>
                                    <Path 
                                    d="M.5,0a.5.5,0,0,0,0,1A.5.5,0,0,0,.854.147.5.5,0,0,0,.5,0Z" 
                                    transform="translate(19 18)"/>
                                    <Path 
                                    d="M7,14a7,7,0,1,1,7-7A7.008,7.008,0,0,1,7,14ZM7,.9A6.1,6.1,0,1,0,13.1,7,6.1,6.1,0,0,0,7,.9Z" 
                                    transform="translate(7 6)"/>
                                    <Path 
                                    d="M2.384,5a1.4,1.4,0,0,1-1.4-1.395,1.383,1.383,0,0,1,.144-.616l-1-.995A.449.449,0,0,1,.45,1.228a.449.449,0,0,1,.319.132l1,.995A1.4,1.4,0,0,1,3,2.354L5.232.131a.449.449,0,1,1,.636.635L5.8.832,3.639,2.989A1.394,1.394,0,0,1,2.384,5Zm0-1.892a.5.5,0,1,0,.5.5A.5.5,0,0,0,2.384,3.109Z" 
                                    transform="translate(11 9)"/>
                                    <Path 
                                    d="M.658,0H.342C.153,0,0,.224,0,.5s.153.5.342.5H.658C.847,1,1,.776,1,.5S.847,0,.658,0Z" 
                                    transform="translate(18 13)"/>
                                    <Path 
                                    d="M.658,0H.342C.153,0,0,.224,0,.5s.153.5.342.5H.658C.847,1,1,.776,1,.5S.847,0,.658,0Z" 
                                    transform="translate(9 13)"/>
                                    <Path 
                                    d="M.5,1C.776,1,1,.847,1,.658V.342C1,.153.776,0,.5,0S0,.153,0,.342V.658C0,.847.224,1,.5,1Z" 
                                    transform="translate(14 8)"/>
                                    <Path 
                                    d="M.5,0C.224,0,0,.153,0,.342V.658C0,.847.224,1,.5,1S1,.847,1,.658V.342C1,.153.776,0,.5,0Z" 
                                    transform="translate(14 17)"/>
                                    <Path 
                                    d="M.5,0A.5.5,0,0,0,.147.854a.5.5,0,0,0,.707,0,.5.5,0,0,0,0-.707A.5.5,0,0,0,.5,0Z" 
                                    transform="translate(0 15)"/>
                                </Svg>
                                <Text style={{color:'#231F20', textAlign:'left', fontSize:12, paddingLeft:10, paddingTop:5}}>Est. Time Required</Text>
                            </View>    
                            <Text style={{color:'#231F20', textAlign:'right', fontSize:12, paddingTop:5}}>45 min</Text>
                        </View>
                    </View>
                    <View style={styles.bodyBox}>
                        <View style={styles.vBox}>
                            <View style={{flexDirection:'row', alignContent:'center'}}>
                                <Svg id="webcam" xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 18 22">
                                    <Path
                                    d="M.5,0A.5.5,0,1,0,1,.5.5.5,0,0,0,.5,0Z" 
                                    transform="translate(9 2)"/>
                                    <Path 
                                    d="M14.143,22H3.857a.429.429,0,0,1-.428-.429A1.86,1.86,0,0,1,4.406,19.8a4,4,0,0,1,1.843-.375l.005-.005a3.3,3.3,0,0,0,.581-1.635A9.021,9.021,0,1,1,18,9.023a9.05,9.05,0,0,1-6.836,8.76,3.291,3.291,0,0,0,.581,1.634l.005.006a4.011,4.011,0,0,1,1.843.375,1.86,1.86,0,0,1,.977,1.771A.429.429,0,0,1,14.143,22ZM6.429,20.281a3.525,3.525,0,0,0-1.615.274.9.9,0,0,0-.475.586h9.325c-.168-.594-.813-.86-2.092-.86ZM7.678,17.95a5.032,5.032,0,0,1-.413,1.472h3.47a5.062,5.062,0,0,1-.413-1.472,9.04,9.04,0,0,1-2.644,0ZM9,.86a8.166,8.166,0,1,0,8.143,8.164A8.163,8.163,0,0,0,9,.86Z"/>
                                    <Path 
                                    d="M3.919,2.363A6.44,6.44,0,0,0,.471.012.376.376,0,0,0,.012.3.4.4,0,0,0,.284.775,5.684,5.684,0,0,1,3.327,2.85a.367.367,0,0,0,.53.066A.405.405,0,0,0,3.919,2.363Z" 
                                    transform="translate(11 2)"/>
                                    <Path 
                                    d="M5,10a5,5,0,1,1,5-5A5.006,5.006,0,0,1,5,10ZM5,.909A4.091,4.091,0,1,0,9.091,5,4.1,4.1,0,0,0,5,.909Z" 
                                    transform="translate(4 4)"/>
                                    <Path 
                                    d="M3,6A3,3,0,1,1,6,3,3,3,0,0,1,3,6ZM3,.857A2.143,2.143,0,1,0,5.143,3,2.145,2.145,0,0,0,3,.857Z" 
                                    transform="translate(6 6)"/>
                                </Svg>
                                <Text style={{color:'#231F20', textAlign:'left', fontSize:12, paddingLeft:10, paddingTop:5}}>Required Eqt.</Text>
                            </View>    
                            <Text style={{color:'#231F20', textAlign:'right', fontSize:12, paddingTop:5}}>Webcam, Microphone</Text>
                        </View>
                    </View>
                    <View style={styles.vBox}>
                        <TouchableOpacity
                                style={{backgroundColor:'#00BA52', width:'48%', borderRadius:5,paddingHorizontal:40, paddingVertical:15, alignItems:'center'}}
                                onPress={()=>{this.onPressStart()}}
                            >
                            <Text style={{color:'#FFFFFF', textAlign:'center'}}>Start</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                                style={{backgroundColor:'#EEEEEE', width:'48%', borderRadius:5,paddingHorizontal:40, paddingVertical:15, alignItems:'center'}}
                                onPress={()=>{this.onPressPractice()}}
                            >
                            <Text style={{color:'#231F20', textAlign:'center'}}>Practice</Text>
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
                </View>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container:{
        margin:20,
        backgroundColor: '#ffffff',
        flex:1
    },
    titleBox:{
        paddingHorizontal: 50,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        height:'50%'
    },
    bodyBox:{
        backgroundColor: 'white'
    },
    vBox:{
        justifyContent:'space-between',
        flexDirection: 'row',
        margin: 15,
        backgroundColor:'#ffffff'
    },
    bannerBox:{
        flex:1,
        width:'100%',
        paddingHorizontal:15,
        position:'absolute',
        bottom:0,
        flexDirection: 'row',
        justifyContent:'space-between',
        marginBottom:15,
        backgroundColor:'#ffffff'
    },
})