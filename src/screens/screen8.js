import React, {PureComponent} from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    TextInput,
    ScrollView,
    Image,
    Dimensions,
} from 'react-native'
import { Dropdown } from 'react-native-material-dropdown';
import {
    Divider, Slider
} from 'react-native-elements'
import { MaterialIcons, Foundation, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

export default class Screen08 extends PureComponent{
    constructor(props){
        super(props)
        this.state={
            clickNumber: 4,   
            user_name:'John Doe',
            playvalue:0.4 

        }
    }
    onPressUploadPhoto(params) {
        
    }
    onPressUpdate(params) {
        
    }
    onPressCancel(params) {

    }
    onPressSelectCity(params) {

    }
    onPressSelectCountry(params) {
        
    }
    onPressPerson() {

    }
    render(){
        let countries = [{value: 'United States',}, {value: 'Russia',}, {value: 'China',}];
        let status = [{value: 'Incomplete',}, {value: 'Complete',}];
        let response = [{value: 'Yes',}, {value: 'No',}];

        return(
            <ScrollView style={styles.container}>
                <View style={styles.titleBox} >
                    <Text style={{color:'#000000', textAlign:'left', fontSize:16}}>{this.state.user_name}</Text>
                    <Text style={{color:'#8B8B8B', textAlign:'left', fontSize:12, paddingTop:5}}>Project Manager Position at Airbnb Berlin</Text>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity
                                style={{ width:'48%', paddingVertical:20, alignItems:'center'}}>
                                <View style={{flexDirection: 'row'}}>
                                    <MaterialCommunityIcons name="email-outline" size={20} color='#00BA52'/>
                                    <Text style={{color:'#00BA52', textAlign:'center', paddingTop:3, paddingLeft:5}}>Email</Text>
                                </View>    
                            </TouchableOpacity>   
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity
                                style={{ width:'48%', paddingHorizontal:10, paddingVertical:20, alignItems:'center'}}
                                onPress={()=>{this.onPressPerson()}}
                            >
                                <View style={{flexDirection: 'row', }}>
                                    <MaterialIcons name="person-outline" size={20} color='#00BA52'/>
                                    <Text style={{color:'#00BA52', width:85, textAlign:'center', paddingTop:3, paddingLeft:5}}>View Profile</Text>
                                </View>    
                            </TouchableOpacity>   
                        </View>
                    </View>
                    <TouchableOpacity
                        style={{backgroundColor:'#00BA52', width:'48%', borderRadius:5, paddingVertical:15, alignItems:'center'}}>
                        <Text style={{color:'#FFFFFF', textAlign:'center'}}>View Report</Text>
                    </TouchableOpacity>
                </View>
                <Divider></Divider>
                <View style={styles.bodyBox} >
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
                        <Text style = {styles.nornumtxt}>6</Text>
                        <Text style = {styles.nornumtxt}>7</Text>
                    </View>
                    <View style={{alignItems:'center', marginBottom:20}}>
                        <Text style = {{textAlign:'center',fontSize:14, width:'80%' }}>Tell us why you think you’d be a great fit for this position?</Text>
                    </View>    
                    <View style={{backgroundColor:'#ffffff',   width:'100%', shadowColor:'#000', shadowOffset:{width:0, height:5}, shadowOpacity:0.1, shadowRadius:2, elevation:1}}>
                        <Image style={{resizeMode: 'cover', width:'100%'}} source={require('../../assets/images/user/man3.png')}></Image>
                        <View style={{flexDirection:'row', paddingLeft:10}}>
                            <TouchableOpacity
                                style={{paddingTop:12, paddingRight:5}}>
                                <Foundation name="pause" size={15} color='#A8A8A8'/>
                            </TouchableOpacity>
                            <Slider style={{width:'95%'}} 
                                thumbTintColor='#00BA52'
                                maximumTrackTintColor='#D8D8D8'
                                minimumTrackTintColor='#D8D8D8'
                                trackStyle= {{height:3, backgroundColor:'#000000'}}
                                thumbStyle={{width:5, height:10, backgroundColor:'#00BA52'}}                                
                                value={this.state.playvalue}
                                >
                            </Slider>                            
                        </View>
                        <Divider></Divider>
                        <View style={{flexDirection:'row', justifyContent:'space-between', padding:10}}>
                            <Text style={{color:'#231F20',  fontSize:12, }}>Rate this response</Text>
                            <View style={{flexDirection:'row'}}>
                                <AntDesign name="star" size={15} color='#C7C7C7'/>
                                <AntDesign name="star" size={15} color='#C7C7C7'/>
                                <AntDesign name="star" size={15} color='#C7C7C7'/>
                                <AntDesign name="star" size={15} color='#C7C7C7'/>
                                <AntDesign name="star" size={15} color='#C7C7C7'/>
                            </View>
                        </View>    
                    </View>                    
                </View>
                <View style={{alignItems:'center', padding:20}}>
                    <Text style = {{textAlign:'center',fontSize:18,marginVertical:20, width:'80%' }}>Scorecard</Text>
                </View>
                <Divider></Divider>					
                <View style={styles.itemRowbox}>
                    <Text style={{fontSize:14, color:'#8B8B8B', marginVertical:15}}>My Average Rating</Text>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flexDirection:'row'}}>
                            <AntDesign name="star" size={10} color='#00BA52'/>
                            <AntDesign name="star" size={10} color='#00BA52'/>
                            <AntDesign name="star" size={10} color='#00BA52'/>
                            <AntDesign name="star" size={10} color='#00BA52'/>
                            <AntDesign name="star" size={10} color='#00BA52'/>
                        </View>
                        <Text style={{fontSize:12, color:'#8B8B8B', paddingLeft: 5}}>5/5</Text>
                    </View>
                </View>
                <Divider></Divider>					
                <View style={styles.itemRowbox}>
                    <Text style={{color:'#8B8B8B'}}>Status</Text>   
                    <View style={{width:'50%'}}> 
                        <Dropdown
                            data={status}
                            style={{color:'#969696', alignContent:'center'}}
                            containerStyle={{backgroundColor:'#EEEEEE', paddingLeft: 10, paddingTop:10, borderRadius:5}}
                            inputContainerStyle={{ borderBottomColor: 'transparent' }}
                            dropdownOffset={{top: 0, left: 0}} 
                            value='Incomplete'
                            showIcon={false}
                        />
                    </View>    
                </View>
                <Divider></Divider>					
                <View style={styles.itemRowbox}>
                    <Text style={{color:'#8B8B8B'}}>My Response</Text>   
                    <View style={{width:'50%'}}> 
                        <Dropdown
                            data={response}
                            overlayStyle={{alignContent:'center'}}
                            style={{color:'#969696', alignContent:'center'}}
                            containerStyle={{backgroundColor:'#EEEEEE', paddingLeft: 10, paddingTop:10, borderRadius:5}}
                            inputContainerStyle={{ borderBottomColor: 'transparent' }}
                            dropdownOffset={{top: 0, left: 0}} 
                            value='Yes'
                            showIcon={false}
                        />
                    </View>    
                </View>
                <Divider></Divider>					
                <View style={styles.itembox}>
                    <Text style={{color:'#8B8B8B', marginVertical:20}}>Notes</Text> 
                    <View style={{backgroundColor:'#F1F1F1', borderRadius:5, marginBottom:20}}>                         
                        <TextInput style={{height:120, padding:20, paddingTop:20}}
                            multiline={true}
                            placeholder={'Add your notes here'}/>
                    </View>    
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between', padding:15, paddingBottom:40}}>
                    <View style={{width:'20%', alignItems :'center', flexDirection:'column'}}>
                        <Image style={{width: 41, height:41}} source={require('../../assets/images/user/man.png')}></Image>
                        <Text style={{textAlign:'center', paddingTop:10, color:'#001C35'}}>{this.state.user_name}</Text>
                    </View>    
                    <View style={{width:'80%', alignContent:'flex-end'}}>
                        <TouchableOpacity
                            style={{backgroundColor:'#0D3A61', width:'100%', height:40, borderRadius:20,paddingHorizontal:15, paddingVertical:10, alignItems:'left'}}>
                            <Text style={{color:'#FFFFFF', textAlign:'center'}}>I like this guy! Confident</Text>
                        </TouchableOpacity>
                        <Text style={{textAlign:'right', fontSize:10, paddingTop:10, color:'#8F8F8F'}}>50 min ago</Text>                     
                    </View>
                </View>     
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white'
    },
    titleBox: {
        padding: 30,
        backgroundColor: '#F5F5F5'
    },
    bodyBox: {
        backgroundColor: 'white',
        padding:15
    },
    vBox: {
        flexDirection: 'row',
        margin: 15
    },
    nornumtxt: {
        fontSize:12, 
        color: '#00BA52',
        paddingTop: 6,
        paddingHorizontal: 10
    },
    numbertxt: {
        marginVertical: 20,
        justifyContent: 'center',
        alignContent: 'center',
        flex:1, 
        flexDirection: 'row'
    },
    circle: {
        alignItems:'center', 
        justifyContent:'center',  
        backgroundColor:'#00BA52', 
        borderColor: '#28ab4f',    
        width:28,   
        height:28, 
        borderRadius:14, 
        borderWidth:1
    },
    circletxt: {
        paddingTop:1,
        paddingHorizontal: 9,
        textAlign: 'center',  
        fontSize:12, 
        lineHeight:13,
        color: 'white'
    },
    itemLabel: {
        fontSize:14.9,
        color:'#231F20',
        paddingBottom:10
    },
    itemRequiredLabel: {
        fontSize:12,
        textAlign: 'left',
        color:'#A8A8A8',
        paddingBottom:10
    },
    itembox: {
        marginHorizontal: 20,
        justifyContent: 'flex-start',
        borderRadius:4        
    },
	itemRowbox: {
        margin: 20,
        alignItems: 'center',
        alignContent: 'center',
        flexDirection:'row',
        justifyContent:'space-between'
	},		
    itemsubbox: {
        justifyContent:'space-between',
        flexDirection: 'row',
        alignItems:'center',
        backgroundColor:'#F1F2F2'
    },
    inputText: {
        width:'90%',
        height:40,
        fontSize: 15,
        color: '#231F20'
    },
    comboText: {
        width:'90%',
        height:40,
        fontSize: 15,
        color: '#D1D3D4'
    },
    combobtn: {
        width:'10%',
        paddingRight: 10,
        alignItems:'flex-end',
        marginRight: 0
    },      
    iconbtn: {
        margin: 15,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems:'center'
    }
})