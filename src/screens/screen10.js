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
import { CheckBox } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import Svg, { Path } from 'react-native-svg';

export default class Screen14 extends PureComponent{
    constructor(props){
        super(props)
          this.state = {
            clickNumber: 4,
            checked: false,
          };
        
    }

    onPressChangeNum() {
        this.setState(prevState => {
            return {
                clickNumber : this.state.clickNumber+1,
            }              
        });
    }

    onPressCopyLink() {
        
    }

    onPressCheck = (checked) => {
        this.setState({
            checked: checked,
        });
      }

    onPressCancel() { 
        
    }

    onPressNext() {
        
    }

    render(){
        let data = [{
            value: 'student',
          }, {
            value: 'worker',
          }, {
            value: 'docter',
          }];

        return(
            <ScrollView style={styles.container}>
                <View style={styles.grayRectangle} >
                    <Text style={styles.grayRectangletxt}>Enter position details</Text>
                    <View style={styles.numbertxt}>
                        <Text style = {styles.nornumtxt}>1</Text>
                        <View style = {styles.circle}>
                            <TouchableOpacity onPress = {()=>{this.onPressChangeNum(1)}}>
                                <Text style = {styles.circletxt}>2</Text>
                            </TouchableOpacity>    
                        </View>
                        <Text style = {styles.nornumtxt}>3</Text>
                        <Text style = {styles.nornumtxt}>4</Text>
                        <Text style = {styles.nornumtxt}>5</Text>
                    </View>                    
                </View>
                <View style={styles.normaltag} >
                    <Text style={styles.normaltagtxt}>Position Title</Text>
                    <View style = {styles.normaltagcon}>
                        <TextInput
                            style = {styles.normaltaginptxt}
                        />
                    </View>          
                </View>
                <View style={styles.normaltag} >
                    <Text style={styles.normaltagtxt}>Location</Text>
                    <View style = {styles.normaltagcon}>
                        <TextInput
                            style = {styles.normaltaginptxt}
                        />
                    </View>          
                </View>
                <View style={styles.selcan} >
                    <Text style={styles.normaltagtxt}>Due date</Text>
                    <View style = {styles.selcancon}>
                        <TextInput
                                style = {styles.selcaninptxt}
                                placeholder={'No due date'}
                        />
                        <TouchableOpacity
                            style={styles.selcanbnt}
                            onPress={()=>{this.onPressCopyLink()}}
                        >
                            <Svg width="16" height="15">
                                <Path 
                                d="M13.5,15H2.5A2.474,2.474,0,0,1,0,12.5v-9A2.474,2.474,0,0,1,2.5,1h2V.5A.474.474,0,0,1,5,0a.473.473,0,0,1,.5.5V1h5V.5a.5.5,0,1,1,1,0V1h2A2.474,2.474,0,0,1,16,3.5v9A2.474,2.474,0,0,1,13.5,15ZM1,6v6.5A1.54,1.54,0,0,0,2.5,14h11A1.54,1.54,0,0,0,15,12.5V6ZM2.5,2A1.54,1.54,0,0,0,1,3.5V5H15V3.5A1.54,1.54,0,0,0,13.5,2h-2v.5a.5.5,0,0,1-1,0V2h-5v.5A.473.473,0,0,1,5,3a.473.473,0,0,1-.5-.5V2Z" 
                                fill="#9b9b9b"/>
                                <Path 
                                d="M1,2a.908.908,0,0,0,.7-.3A1.08,1.08,0,0,0,2,1,1.08,1.08,0,0,0,1.7.3.967.967,0,0,0,.3.3.908.908,0,0,0,0,1a1.08,1.08,0,0,0,.3.7A.908.908,0,0,0,1,2Z" 
                                transform="translate(2 11)" 
                                fill="#9b9b9b"/>
                                <Path 
                                d="M1,2a.908.908,0,0,0,.7-.3A1.08,1.08,0,0,0,2,1,1.08,1.08,0,0,0,1.7.3.967.967,0,0,0,.3.3.908.908,0,0,0,0,1a.908.908,0,0,0,.3.7A.908.908,0,0,0,1,2Z" 
                                transform="translate(2 7)" 
                                fill="#9b9b9b"/>
                                <Path 
                                d="M1,2a.908.908,0,0,0,.7-.3A1.08,1.08,0,0,0,2,1,1.08,1.08,0,0,0,1.7.3.967.967,0,0,0,.3.3,1.08,1.08,0,0,0,0,1a1.08,1.08,0,0,0,.3.7A.908.908,0,0,0,1,2Z" 
                                transform="translate(5 11)" 
                                fill="#9b9b9b"/>
                                <Path 
                                d="M1,2a.908.908,0,0,0,.7-.3A1.08,1.08,0,0,0,2,1,1.08,1.08,0,0,0,1.7.3.967.967,0,0,0,.3.3,1.08,1.08,0,0,0,0,1a1.08,1.08,0,0,0,.3.7A.908.908,0,0,0,1,2Z" 
                                transform="translate(5 7)" 
                                fill="#9b9b9b"/>
                                <Path 
                                d="M1,2a.908.908,0,0,0,.7-.3A.908.908,0,0,0,2,1,.908.908,0,0,0,1.7.3.967.967,0,0,0,.3.3,1.08,1.08,0,0,0,0,1a1.08,1.08,0,0,0,.3.7A.908.908,0,0,0,1,2Z" 
                                transform="translate(9 11)" 
                                fill="#9b9b9b"/>
                                <Path 
                                d="M1,2a.908.908,0,0,0,.7-.3A.908.908,0,0,0,2,1,1.08,1.08,0,0,0,1.7.3.967.967,0,0,0,.3.3,1.08,1.08,0,0,0,0,1a1.08,1.08,0,0,0,.3.7A.908.908,0,0,0,1,2Z" 
                                transform="translate(9 7)" 
                                fill="#9b9b9b"/>
                                <Path 
                                d="M1,2a.908.908,0,0,0,.7-.3A1.08,1.08,0,0,0,2,1,1.08,1.08,0,0,0,1.7.3.967.967,0,0,0,.3.3.908.908,0,0,0,0,1a1.08,1.08,0,0,0,.3.7A.908.908,0,0,0,1,2Z" 
                                transform="translate(12 11)" 
                                fill="#9b9b9b"/>
                                <Path 
                                d="M1,2a.908.908,0,0,0,.7-.3A.908.908,0,0,0,2,1,1.08,1.08,0,0,0,1.7.3.967.967,0,0,0,.3.3,1.08,1.08,0,0,0,0,1a1.08,1.08,0,0,0,.3.7A.908.908,0,0,0,1,2Z" 
                                transform="translate(12 7)" 
                                fill="#9b9b9b"/>
                            </Svg>
                            {/* <Ionicons name="md-calendar" size={30} color='#9B9B9B'/> */}
                        </TouchableOpacity>
                    </View>
                    <View>                        
                    </View>        
                </View>
                
                <View style={styles.normaltag} >
                    <Text style={styles.normaltagtxt}>Description</Text>
                    <View style = {styles.normaltagcon}>
                        <TextInput
                            style = {styles.normaltaginptxt}
                        />
                    </View>          
                </View>

                <View style={styles.selcan} >
                    <Text style={styles.normaltagtxt}>Scheduled Reminders</Text>
                    <View style = {styles.selschcon}>
                        <Dropdown
                            label='Select'
                            data={data}
                            containerStyle={{paddingLeft: 15, paddingTop:10, paddingBottom:0, width: '100%'}}
                            inputContainerStyle={{ borderBottomColor: 'transparent' }}
                            dropdownOffset={{top: 0, left: 0}}
                            showIcon={false}
                        />
                        {/* <TouchableOpacity
                            style={styles.selcanbnt}
                            onPress={()=>{this.onPressCopyLink()}}
                        >
                            <Ionicons name="ios-arrow-down" size={20} color='#CFCFCF'/>
                        </TouchableOpacity> */}
                    </View>
                    <View style={{marginLeft: 20}}> 
                                              
                    </View>        
                </View>

                <View style={styles.selcan} >
                    <Text style={styles.normaltagtxt}>Intro video</Text>
                    <View style = {styles.selcancon}>
                        <TextInput
                                style = {styles.selcaninptxt}
                                placeholder={'Click to browse'}
                        />
                        <TouchableOpacity
                            style={styles.selcanbnt}
                            onPress={()=>{this.onPressCopyLink()}}
                        >
                            <Svg width="16" height="16">
                                <Path 
                                d="M5.946,10.851a.662.662,0,0,0,.429.184.557.557,0,0,0,.429-.184l5.64-5.64a.56.56,0,0,1,.429-.184.579.579,0,0,1,.613.613.557.557,0,0,1-.184.429L6.621,12.751a2.558,2.558,0,0,1-3.494,0,2.421,2.421,0,0,1-.736-1.716,2.32,2.32,0,0,1,.736-1.716L10.544,1.9a.593.593,0,0,0,0-.858L9.686.184a.593.593,0,0,0-.858,0L1.41,7.6A4.86,4.86,0,0,0,0,11.1,4.964,4.964,0,0,0,1.41,14.59,4.86,4.86,0,0,0,4.9,16,4.964,4.964,0,0,0,8.4,14.59L15.08,7.908A3.122,3.122,0,0,0,16,5.762,3.035,3.035,0,0,0,12.935,2.7a2.876,2.876,0,0,0-2.146.92l-5.64,5.64a.593.593,0,0,0,0,.858Z" 
                                fill="#d1d3d4"/>
                            </Svg>
                        </TouchableOpacity>
                    </View>
                    <View>                        
                    </View>        
                </View>
                <View style={styles.selcan} >
                    <Text style={styles.normaltagtxt}>Outro video</Text>
                    <View style = {styles.selcancon}>
                        <TextInput
                                style = {styles.selcaninptxt}
                                placeholder={'Click to browse'}
                        />
                        <TouchableOpacity
                            style={styles.selcanbnt}
                            onPress={()=>{this.onPressCopyLink()}}
                        >
                            <Svg width="16" height="16">
                                <Path 
                                d="M5.946,10.851a.662.662,0,0,0,.429.184.557.557,0,0,0,.429-.184l5.64-5.64a.56.56,0,0,1,.429-.184.579.579,0,0,1,.613.613.557.557,0,0,1-.184.429L6.621,12.751a2.558,2.558,0,0,1-3.494,0,2.421,2.421,0,0,1-.736-1.716,2.32,2.32,0,0,1,.736-1.716L10.544,1.9a.593.593,0,0,0,0-.858L9.686.184a.593.593,0,0,0-.858,0L1.41,7.6A4.86,4.86,0,0,0,0,11.1,4.964,4.964,0,0,0,1.41,14.59,4.86,4.86,0,0,0,4.9,16,4.964,4.964,0,0,0,8.4,14.59L15.08,7.908A3.122,3.122,0,0,0,16,5.762,3.035,3.035,0,0,0,12.935,2.7a2.876,2.876,0,0,0-2.146.92l-5.64,5.64a.593.593,0,0,0,0,.858Z" 
                                fill="#d1d3d4"/>
                            </Svg>
                        </TouchableOpacity>
                    </View>
                    <View>                        
                    </View>        
                </View>  
                <View style ={{padding: 10}}>
                    <CheckBox
                        title='Enable Scored Questions'
                        checkedIcon='check-square-o'
                        uncheckedIcon='square-o'
                        size = {30}
                        containerStyle = {{ backgroundColor: 'white', borderColor: 'transparent'}}
                        checked={this.state.checked}
                        onPress={() => this.setState({checked: !this.state.checked})}
                    />    
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
        backgroundColor: 'white'
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

    normaltag: {
        height: 95, 
        backgroundColor: 'white',
    },

    normaltagtxt: {
        paddingTop: 5,
        paddingLeft: 20,
        margin: 1,
        fontSize:15,
        color:'#231F20'
    },

    normaltagcon: {
        padding: 15,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#F1F2F2',        
        flexDirection: 'row',
        fontSize: 15,
    },

    normaltaginptxt: {
        width:'100%',
        color: '#808080',
    },

    selcan: {
        height: 95, 
        backgroundColor: 'white',
    },

    selschcon: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#f1f2f2',        
        flexDirection: 'row',
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


    decidebnt: {
        padding: 20,
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
