import React, {PureComponent} from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    TextInput,
    ScrollView,
    Image
} from 'react-native'
import { Dropdown } from 'react-native-material-dropdown';
import {
    Divider
} from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';

export default class Screen04 extends PureComponent{
    constructor(props){
        super(props)
        this.state={
            clickNumber: 4,
            user_name:'John Doe'
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
    render(){
        let countries = [{
            value: 'United States',
          }, {
            value: 'Russia',
          }, {
            value: 'China',
          }];

        return(
            <ScrollView style={styles.container}>
                <View style={styles.titleBox} >
                    <Text style={{color:'#231F20', fontSize:14, paddingLeft:20, paddingVertical:20}}>Update your profile infromation below</Text>
                </View>
                <Divider></Divider>
                <View style={styles.bodyBox} >
                    <View style={styles.vBox} >
                        <Image source={require('../../assets/images/user/man.png')} style={{width:76, height:76 }}></Image>
                        <View style={{paddingLeft:20, flexDirection:'column', justifyContent:'center'}}>
                            <Text style={{color:'#231F20',  fontSize:18, paddingBottom:10}}>{this.state.user_name}</Text>
                            <TouchableOpacity style={{alignItems:'flex-start'}} onPress={()=>{this.onPressUploadPhoto()}}>
                                <Text style={{color:'#00BA52'}}>Update Profile Picture</Text>
                            </TouchableOpacity>
                        </View>    
                    </View>
                    <View style={styles.itembox}>
                        <Text style={styles.itemLabel}>First Name<Text style={styles.itemRequiredLabel}> Required</Text></Text>   
                        <View style={styles.itemsubbox}> 
                            <TextInput style = {styles.inputText}/>                            
                        </View>    
                    </View>    
                    <View style={styles.itembox}>
                        <Text style={styles.itemLabel}>Last Name<Text style={styles.itemRequiredLabel}> Required</Text></Text>   
                        <View style={styles.itemsubbox}> 
                            <TextInput style = {styles.inputText}/>                            
                        </View>    
                    </View> 
                    <View style={styles.itembox}>
                        <Text style={styles.itemLabel}>Email Address<Text style={styles.itemRequiredLabel}> Required</Text></Text>   
                        <View style={styles.itemsubbox}> 
                            <TextInput style = {styles.inputText}/>                            
                        </View>    
                    </View>
                    <View style={styles.itembox}>
                        <Text style={styles.itemLabel}>Phone Number<Text style={styles.itemRequiredLabel}> Required</Text></Text>   
                        <View style={styles.itemsubbox}> 
                            <TextInput style = {styles.inputText}/>                            
                        </View>    
                    </View>   
                    <View style={styles.itembox}>
                        <Text style={styles.itemLabel}>Country</Text>   
                        <View style={styles.itemsubbox}> 
                            <Dropdown
                                data={countries}
                                containerStyle={{paddingLeft: 15, paddingTop:10, paddingBottom:0, width: '100%'}}
                                inputContainerStyle={{ borderBottomColor: 'transparent' }}
                                dropdownOffset={{top: 0, left: 0}} 
                                value='United States'
                                showIcon={false}
                            />
                        </View>    
                    </View>
                    <View style={styles.itembox}>
                        <Text style={styles.itemLabel}>City</Text>                           
                        <View style={styles.itemsubbox}> 
                            <TextInput
                                    style = {styles.comboText}
                                    placeholder={'Select a City'}
                            />
                            <TouchableOpacity
                                style={styles.combobtn}
                                onPress={()=>{this.onPressSelectCity()}}
                            >
                            <Ionicons name="ios-arrow-down" size={20} color='#CFCFCF'/>
                            </TouchableOpacity>
                        </View>    
                    </View>
                    <View style={styles.bannerBox}>
                        <TouchableOpacity
                                style={{backgroundColor:'#EEEEEE', width:'48%', borderRadius:5,paddingHorizontal:40, paddingVertical:15, alignItems:'center'}}
                                onPress={()=>{this.onPressCancel()}}
                            >
                            <Text style={{color:'#231F20', textAlign:'center'}}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                                style={{backgroundColor:'#00BA52', width:'48%', borderRadius:5,paddingHorizontal:40, paddingVertical:15, alignItems:'center'}}
                                onPress={()=>{this.onPressUpdate()}}
                            >
                            <Text style={{color:'#FFFFFF', textAlign:'center'}}>Update</Text>
                        </TouchableOpacity>
                    </View>    
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
    titleBox:{
        padding: 15,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5'
    },
    bodyBox:{
        backgroundColor: 'white',
        margin:15
    },
    vBox:{
        flexDirection: 'row',
        margin: 15,
    },
    itemLabel:{
        fontSize:14.9,
        color:'#231F20',
        paddingBottom:15,
        
    },
    itemRequiredLabel:{
        fontSize:12,
        textAlign: 'left',
        color:'#A8A8A8',
        paddingBottom:10,
        
    },
    itembox:{
        margin: 15,
        justifyContent: 'flex-start',
        borderRadius:4        
    },
    itemsubbox:{
        justifyContent:'space-between',
        flexDirection: 'row',
        alignItems:'center',
        backgroundColor:'#F1F2F2'
    },
    inputText:{
        paddingLeft:15,
        width:'90%',
        height:40,
        fontSize: 15,
        color: '#231F20',
        borderRadius:2
    },
    comboText:{
        paddingLeft:15,
        width:'90%',
        height:40,
        fontSize: 15,
        color: '#D1D3D4'
    },
    combobtn:{
        width:'10%',
        paddingRight: 5,
        alignItems:'flex-end',
        marginRight: 0,
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
        paddingTop: 20,
        backgroundColor: 'white',
        paddingHorizontal:15,
        flexDirection: 'row',
        justifyContent:'space-between',
        marginBottom:15,
    }
})