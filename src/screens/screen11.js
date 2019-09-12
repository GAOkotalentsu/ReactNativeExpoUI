import React, {PureComponent} from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    TextInput,
    ScrollView,
    Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class Screen14 extends PureComponent{
    constructor(props){
        super(props)
          this.state = {
            clickNumber: 4
          };
        
    }

    onPressChangeNum(params) {
        this.setState(prevState => {
            return {
                clickNumber : this.state.clickNumber+1,
            }              
        });
    }

    onPressCopyLink(params) {
        
    }

    onPressCancel(params) { 
        
    }

    onPressNext(params) {
        
    }

    render(){
        const placeholder = {
            label: 'Select Candidates',
            value: null,
            color: '#9EA0A4',
        };
        return(
            <ScrollView style={styles.container}>
                <View style={styles.grayRectangle} >
                    <Text style={styles.grayRectangletxt}>Ship your position</Text>
                    <View style={styles.numbertxt}>
                        <Text style = {styles.nornumtxt}>1</Text>
                        <Text style = {styles.nornumtxt}>2</Text>
                        <Text style = {styles.nornumtxt}>3</Text>
                        <View style = {styles.circle}>
                            <TouchableOpacity onPress = {()=>{this.onPressChangeNum(1)}}>
                                <Text style = {styles.circletxt}>4</Text>
                            </TouchableOpacity>    
                        </View>
                        <Text style = {styles.nornumtxt}>5</Text>
                    </View>                    
                </View>
                <View style={styles.createsucces}>
                    <Ionicons style = {styles.checcir} name="ios-checkmark-circle-outline" size={50} color='#00BA52'/>
                    <Text style={styles.createalarm}>
                        You have successfully created your hiring opportunity!
                    </Text>
                    
                </View>
                <View style={styles.sharelink} >
                    <Text style={styles.sharelinktxt}>Share your interview using this link</Text>
                    <View style = {styles.sharelinkcon}>
                        <TextInput
                            style = {styles.sharelinkinptxt}
                            placeholder={'https://digitalhire.com/i/13847h713'}
                        />
                        <TouchableOpacity
                            style={styles.sharelinkbnt}
                            onPress={()=>{this.onPressCopyLink()}}
                        >
                            <Text style={{color: '#04BA52'}}> Copy Link </Text>
                        </TouchableOpacity>
                    </View>          
                </View>
                <View style={styles.selcan} >
                    <Text style={styles.sharelinktxt}>Search Select and Invite Candidates</Text>
                    <View style = {styles.selcancon}>
                        <TextInput
                                style = {styles.selcaninptxt}
                                placeholder={'Select Candidates'}
                        />
                        <TouchableOpacity
                            style={styles.selcanbnt}
                            onPress={()=>{this.onPressCopyLink()}}
                        >
                            <Ionicons name="ios-arrow-down" size={20} color='#CFCFCF'/>

                        </TouchableOpacity>
                    </View>
                    <View>
                        
                    </View>        
                </View>
                <View style = {{paddingTop: 20, backgroundColor: 'white' }}>
                    <View className = "shadowTest"  style={styles.invitedMem}>
                        <Image 
                            source={require('../../assets/images/user/man1.png')}  
                            style={styles.invitedImg} 
                        />
                        <View>
                            <Text style={styles.invitedNam}>
                                John Doe
                            </Text>
                            <Text style={styles.invitedSta}>
                                invited
                            </Text>
                        </View>                            
                    </View>
                    <View className = "shadowTest"  style={styles.invitedMem}>
                        <Image 
                            source={require('../../assets/images/user/man2.png')}  
                            style={styles.invitedImg} 
                        />
                        <View>
                            <Text style={styles.invitedNam}>
                                Stephen Hawk
                            </Text>
                            <Text style={styles.invitedSta}>
                                invited
                            </Text>
                        </View>                            
                    </View>
                </View> 
                <View style={styles.decidebnt}>
                    <TouchableOpacity
                        style = {styles.decidebntCan}
                        onPress={()=>{this.onPressCancel()}}
                    >
                        <Text style={{color: '#828282'}}> Cancel </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style = {styles.decidebntNex}
                        onPress={()=>{this.onPressNext()}}
                    >
                        <Text style={{color: '#FFFFFF'}}> Next </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>            
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white',
    },

    grayRectangle: {
        height: 110, 
        backgroundColor: '#f5f5f5',
        marginBottom: 10,
    },

    grayRectangletxt:{
        paddingTop: 25,
        margin: 0,
        flex:1,
        fontSize:14,
        textAlign: 'center',
        alignItems:'center',
        color:'#6D6D6D'
    },

    numbertxt: {
        margin: 0,
        justifyContent: 'center',
        flex:1, 
        flexDirection: 'row'
    },
    
    nornumtxt: {
        fontSize:12, 
        color: '#00BA52',
        paddingTop: 6,
        paddingHorizontal: 10,
    },

    circle: {
        alignItems:'center', 
        justifyContent:'center',  
        backgroundColor:'#00BA52', 
        borderColor: '#28ab4f',    
        width:28,   
        height:28, 
        borderRadius:14, 
        borderWidth:1,
    },

    circletxt: {
        paddingTop:1,
        paddingHorizontal: 10,
        textAlign: 'center',  
        fontSize:12, 
        lineHeight:13,
        color: 'white',
    },

    createsucces: {
        height: 95, 
        backgroundColor: 'white',
        flexDirection: 'row'
    },

    checcir: {
        padding: 20,
    },

    createalarm: {        
        paddingTop: 35,
        paddingHorizontal: 20,
        flex:1,
        fontSize:12,
        fontWeight: 'bold',
        color:'black'
    },

    sharelink: {
        height: 95, 
        backgroundColor: 'white',
    },

    sharelinktxt: {
        paddingTop: 5,
        paddingLeft: 20,
        margin: 1,
        fontSize:15,
        color:'#231F20'
    },

    sharelinkcon: {
        padding: 15,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#F1F2F2',        
        flexDirection: 'row',
        fontSize: 15,
    },

    sharelinkinptxt: {
        width:'75%',
        color: '#808080',
    },

    sharelinkbnt: {
        paddingTop: 3,
        width:'25%',
        fontSize: 12, 
        marginRight: 0,
    },

    selcan: {
        height: 95, 
        backgroundColor: 'white',
    },

    selcancon: {
        padding: 15,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#f1f2f2',        
        flexDirection: 'row',
    },

    selcaninptxt: {
        width:'95%',
        fontSize: 15,
        color: '#D1D3D4',
    },

    selcanbnt: {
        paddingTop: 3,
        width:'5%',
        marginRight: 0,
    },
    
    invitedMem: {
        margin: 10,
        marginLeft: 50,
        marginRight: 50,

        height: 90, 
        borderRadius:2,
        backgroundColor:'#FFFFFF', 
        shadowColor: '#000000',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        alignItems:'center',
        shadowOpacity: 0.1,
        flexDirection: 'row',
    },

    invitedImg: {
        marginLeft: 20,
        width: 60,
        height: 60,
        borderRadius: 60/ 2
    },

    invitedNam: {
        padding: 10,
        paddingBottom: 0,
        marginLeft: 10,
        fontSize: 16,
        color: '#001C35',
    },

    invitedSta: {
        marginLeft: 20,
        fontSize: 11,
        color: '#8F8F8F',
    },

    decidebnt: {
        padding: 20,
        paddingTop: 50,
        height: 130, 
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    decidebntCan: {
        width:'40%',
        height:40,
        borderRadius:5,

        alignItems:'center', 
        justifyContent:'center',  
        backgroundColor:'#EEEEEE', 
    },

    decidebntNex: {
        width:'40%',
        height:40,
        borderRadius:5,
        
        alignItems:'center', 
        justifyContent:'center',  
        backgroundColor:'#00BA52', 
    },
})
