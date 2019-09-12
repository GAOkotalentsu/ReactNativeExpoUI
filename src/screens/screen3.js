import React, { Component } from "react";
import {
    View,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Text,
    TextInput
} from 'react-native'
import ProgressCircle from 'react-native-progress-circle'
import {
    Ionicons
} from '@expo/vector-icons'
import Tabs from './tabs/tabs';

export default class FirstScreen extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }

    render() {
        return (
            <ScrollView>
                <View>
                    <View style={styles.searchView}>
                        <TextInput style={styles.filterInput} placeholder="Filter" />
                        <TouchableOpacity style={styles.searchIconButton}>
                            <Ionicons style={{color:'#ffffff'}} size={20} name="md-search"/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.newPositionButton}>
                            <Text style={{fontSize:12, color:'#ffffff', textAlign:'center'}}>New Position</Text>  
                        </TouchableOpacity>
                    </View>
                    <View style={styles.tabView}>
                        <Tabs>
                            <ScrollView title="Open">
                                <View style={{backgroundColor:'#ffffff'}}>
                                    <View style={styles.jobView}>
                                        <View style={styles.jobTitleView}>
                                            <Text style={styles.jobTitleText}>Marketing Designer</Text>
                                            <Text style={styles.airbnbText}>Airbnb</Text>
                                        </View>
                                        <View style={styles.jobRatingView}>
                                            <View style={styles.jobRatingSubView}>
                                                <ProgressCircle
                                                    style={styles.jobRating} 
                                                    percent={100*280/300}
                                                    radius={50}
                                                    borderWidth={5}
                                                    color="#00ba52"
                                                    bgColor="#ffffff">
                                                    <Text>280/300</Text>
                                                </ProgressCircle>
                                                <Text style={styles.jobRatingLabel}>Interviews Completed</Text>
                                            </View>
                                            <View style={styles.jobRatingSubView}>
                                                <ProgressCircle
                                                    percent={100*280/300}
                                                    radius={50}
                                                    borderWidth={5}
                                                    color="#00ba52"
                                                    bgColor="#ffffff">
                                                    <Text>280/300</Text>
                                                </ProgressCircle>
                                                <Text style={styles.jobRatingLabel}>Candidates Liked</Text>
                                            </View>
                                        </View>
                                        <View style={styles.jobSettingView}>
                                            <TouchableOpacity>
                                                <Text style={styles.jobSettingButton}>Edit</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity>
                                                <Text style={styles.jobSettingButton}>View</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity>
                                                <Text style={styles.jobSettingButton}>Options</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity>
                                                <Ionicons style={{color:'#00ba52'}} size={20} name="md-arrow-dropdown"/>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={styles.jobView}>
                                        <View style={styles.jobTitleView}>
                                            <Text style={styles.jobTitleText}>Product Manager</Text>
                                            <Text style={styles.airbnbText}>Airbnb</Text>
                                        </View>
                                        <View style={styles.jobRatingView}>
                                            <View style={styles.jobRatingSubView}>
                                                <ProgressCircle
                                                    style={styles.jobRating} 
                                                    percent={100*280/300}
                                                    radius={50}
                                                    borderWidth={5}
                                                    color="#00ba52"
                                                    bgColor="#ffffff">
                                                    <Text>280/300</Text>
                                                </ProgressCircle>
                                                <Text style={styles.jobRatingLabel}>Interviews Completed</Text>
                                            </View>
                                            <View style={styles.jobRatingSubView}>
                                                <ProgressCircle
                                                    percent={100*280/300}
                                                    radius={50}
                                                    borderWidth={5}
                                                    color="#00ba52"
                                                    bgColor="#ffffff">
                                                    <Text>280/300</Text>
                                                </ProgressCircle>
                                                <Text style={styles.jobRatingLabel}>Candidates Liked</Text>
                                            </View>
                                        </View>
                                        <View style={styles.jobSettingView}>
                                            <TouchableOpacity>
                                                <Text style={styles.jobSettingButton}>Edit</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity>
                                                <Text style={styles.jobSettingButton}>View</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity>
                                                <Text style={styles.jobSettingButton}>Options</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity>
                                                <Ionicons style={{color:'#00ba52'}} size={20} name="md-arrow-dropdown"/>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={styles.jobView}>
                                        <View style={styles.jobTitleView}>
                                            <Text style={styles.jobTitleText}>QA Engineer</Text>
                                            <Text style={styles.airbnbText}>Airbnb</Text>
                                        </View>
                                        <View style={styles.jobRatingView}>
                                            <View style={styles.jobRatingSubView}>
                                                <ProgressCircle
                                                    style={styles.jobRating} 
                                                    percent={100*280/300}
                                                    radius={50}
                                                    borderWidth={5}
                                                    color="#00ba52"
                                                    bgColor="#ffffff">
                                                    <Text>280/300</Text>
                                                </ProgressCircle>
                                                <Text style={styles.jobRatingLabel}>Interviews Completed</Text>
                                            </View>
                                            <View style={styles.jobRatingSubView}>
                                                <ProgressCircle
                                                    percent={100*280/300}
                                                    radius={50}
                                                    borderWidth={5}
                                                    color="#00ba52"
                                                    bgColor="#ffffff">
                                                    <Text>280/300</Text>
                                                </ProgressCircle>
                                                <Text style={styles.jobRatingLabel}>Candidates Liked</Text>
                                            </View>
                                        </View>
                                        <View style={styles.jobSettingView}>
                                            <TouchableOpacity>
                                                <Text style={styles.jobSettingButton}>Edit</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity>
                                                <Text style={styles.jobSettingButton}>View</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity>
                                                <Text style={styles.jobSettingButton}>Options</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity>
                                                <Ionicons style={{color:'#00ba52'}} size={20} name="md-arrow-dropdown"/>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </ScrollView>
                            <View title="Archived" style={{backgroundColor:'#ffffff'}}>
                            </View>
                            <View title="Drafts" style={{backgroundColor:'#ffffff'}}>
                            </View>
                        </Tabs>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
        searchView:{
        flexDirection: 'row',
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    filterInput:{
        backgroundColor:'#ffffff', 
        borderTopLeftRadius: 2,
        borderBottomLeftRadius: 2,
        paddingLeft:10,
        width: '45%',
        borderWidth: 1,
        borderColor: '#e5e5e5'
    },
    searchIconButton:{
        width:'15%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#00ba52",
        borderTopRightRadius:2,
        borderBottomRightRadius:2
    },
    newPositionButton:{
        backgroundColor:"#00ba52", 
        borderRadius:2,
        paddingVertical:10,
        marginLeft: 10,
        width:'35%',
        alignSelf:'flex-end'
    },
    tabView:{
        width:'100%',
        backgroundColor:'#f5f5f5'
    },
    jobView:{
        marginVertical: 20,
        marginHorizontal: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ececec',
        flex: 1
    },
    jobTitleView:{
        flexDirection: 'row',
        paddingVertical: 20,
        paddingHorizontal: 20,
        justifyContent: 'space-between'
    },
    jobRatingView:{
        backgroundColor:'#f0f0f0',
        flexDirection: 'row',
        paddingVertical: 20,
        paddingHorizontal: 20,
        justifyContent: 'space-around',
        
    },
    jobSettingView:{
        flexDirection: 'row',
        paddingVertical: 20,
        paddingHorizontal: 20,
        justifyContent: 'center'
    },
    jobTitleText:{
        fontSize: 17
    },
    airbnbText:{
        fontSize: 12,
        color: '#acacac'
    },
    jobSettingButton:{
        color:'#00ba52',
        fontSize: 12,
        marginHorizontal: 10
    },
    jobRating:{
        marginVertical: 10 
    },
    jobRatingLabel:{
        fontSize: 10,
        color: '#6b6b6b',
        marginVertical: 10
    },
    jobRatingSubView:{
        flexDirection: 'column',
        alignContent: 'space-between'
    }
});