import React, {PureComponent} from 'react';
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    Image,
    ImageBackground,
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import BarChartCom from './charts/barcharCom';
import PieChartCom from './charts/piechartCom';
import Svg, { Path } from 'react-native-svg'

const PieData = [
    {
        key: 1,
        amount: 30,
        svg: { fill: '#00BA52' },
        arc: { outerRadius: '100%', cornerRadius: 0,  padAngle:0}
    },
    {
        key: 2,
        amount: 40,
        svg: { fill: '#001C35' },
        arc: { outerRadius: '120%', padAngle:0}
    },
    {
        key: 3,
        amount: 30,
        svg: { fill: '#FFC400' , },
        arc: { outerRadius: '100%', cornerRadius: 0,  padAngle:0, },
    },
]
const PieData1 = [
    {
        key: 1,
        amount: 60,
        svg: { fill: '#00BA52' },
        arc: { outerRadius: '100%', cornerRadius: 0,  padAngle:0}
    },
    {
        key: 2,
        amount: 40,
        svg: { fill: '#001C35' },
        arc: { outerRadius: '120%', padAngle:0}
    },
]

export default class Screen12 extends PureComponent{
    constructor(props){
        super(props)
          this.state = {
            clickNumber: 4,      
            open_positions : 19,
            video_inbox : 139,
            all_videos : 3219,
            liked_candidates : 139,
            invited : 1192,
            clicked_invite : 709,
            started_interview : 388,
            completed : 376,
            reviewed : 108,
            liked : 25,
          };        
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
                    <View style = {styles.grayselcon}>
                        <View style = {styles.grayselmem1}>
                            <Dropdown
                                fontSize={12}
                                label='Last Month'
                                data={data}
                                containerStyle={{paddingLeft: 15, paddingTop:10, paddingBottom:0, width: '100%', height: 15}}
                                inputContainerStyle={{ borderBottomColor: 'transparent' }}
                                dropdownOffset={{top: 0, left: 0}}
                                showIcon={false}
                            />
                        </View>
                        <View style = {styles.grayselmem2}>
                            <Dropdown
                                fontSize={12}
                                label='Filter'
                                data={data}
                                containerStyle={{paddingLeft: 15, paddingTop:10, paddingBottom:0, width: '100%'}}
                                inputContainerStyle={{ borderBottomColor: 'transparent' }}
                                dropdownOffset={{top: 0, left: 0}}
                                showIcon={false}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.intvStabord}>

                    <Text style={styles.intvStatxtH}>Interviews Created vs. Taken</Text>
                    <BarChartCom />
                    
                </View>
                <View style={styles.avgtimeboard}>
                    <Svg style={styles.avgtimeImg} width="54" height="52">
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
                    <View>
                        <Text style={styles.agvtimeSta}>
                            Avg. Response Time
                        </Text>
                        <Text style={styles.agvtimeStasm}>
                            Time between scheduling and completion
                        </Text>
                        <Text style={styles.agvtimeStacl}>
                            18.3 hours
                        </Text>
                    </View>                            
                </View>
                <View style={styles.avgtimeboard}>
                    <Svg style={styles.avgtimeImg} width="54" height="52">
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
                    <View>
                        <Text style={styles.agvtimeSta}>
                            Avg. Completion Time
                        </Text>
                        <Text style={styles.agvtimeStasm}>
                            Time taken to complete an interview
                        </Text>
                        <Text style={styles.agvtimeStacl}>
                            90% of total time
                        </Text>
                    </View>                            
                </View>
                <View style={styles.avgtimeboard}>
                    <Svg style={styles.avgtimeImg} width="54" height="52">
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
                    <View>
                        <Text style={styles.agvtimeSta}>
                            Avg. Time 
                        </Text>
                        <Text style={styles.agvtimeStasm}>
                            Taken to Shortlist Candidates
                        </Text>
                        <Text style={styles.agvtimeStacl}>
                            18.3 hours
                        </Text>
                    </View>                            
                </View>
                <View style={styles.intvStabord}>

                    <Text style={styles.intvStatxtH}>InterView Status</Text>
                    <PieChartCom data = {PieData}/>
                    <View style = {styles.intvStaF}>
                        <View style = {styles.intvStaFC}>
                            <View style = {styles.circleSchedul}></View>
                            <View>
                                <Text>Scheduled</Text>
                            </View>
                        </View>
                        <View style = {styles.intvStaFC}>
                            <View style = {styles.circleDrop}></View>
                            <View>
                                <Text>Droped</Text>
                            </View>
                        </View>
                        <View style = {styles.intvStaFC}>
                            <View style = {styles.circleComplete}></View>
                            <View>
                                <Text>Completed</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.intvStabord}>
                    <Text style={styles.intvStatxtH}>App Type</Text>
                    <PieChartCom data = {PieData}/>
                    <View style = {styles.intvStaF}>
                        <View style = {styles.intvStaFC}>
                            <View style = {styles.circleSchedul}></View>
                            <View>
                                <Text>Broser</Text>
                            </View>
                        </View>
                        <View style = {styles.intvStaFC}>
                            <View style = {styles.circleDrop}></View>
                            <View>
                                <Text>iOS</Text>
                            </View>
                        </View>
                        <View style = {styles.intvStaFC}>
                            <View style = {styles.circleComplete}></View>
                            <View>
                                <Text>Android</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.intvStabord}>
                    <Text style={styles.intvStatxtH}>Users</Text>
                    <PieChartCom data = {PieData1}/>
                    <View style = {styles.intvStaF}>
                        <View style = {styles.intvStaFC}>
                            <View style = {styles.circleSchedul}></View>
                            <View>
                                <Text>Inactive</Text>
                            </View>
                        </View>
                        <View style = {styles.intvStaFC}>
                            <View style = {styles.circleComplete}></View>
                            <View>
                                <Text>Active</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.intvStabord}>
                    <Text style={styles.intvStatxtH}>Candidate Shortlisting</Text>
                    <PieChartCom data = {PieData1}/>
                    <View style = {styles.intvStaF}>
                        <View style = {styles.intvStaFC}>
                            <View style = {styles.circleSchedul}></View>
                            <View>
                                <Text>Pending</Text>
                            </View>
                        </View>
                        <View style = {styles.intvStaFC}>
                            <View style = {styles.circleComplete}></View>
                            <View>
                                <Text>complete</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.intvStabord}>
                    <View style={styles.ladder}>
                        <Text style={{fontSize:18, textAlign:'center', marginVertical:10}}>Positions Funnel</Text>
                        <ImageBackground source={require("../../assets/images/dashboard/positions_funnel.png")} style={styles.ladderImageBackground} imageStyle={styles.ladderImage}>
                            <Text style={styles.ladderText}>Invited: {this.state.invited}</Text>
                            <Text style={styles.ladderText}>Clicked Invite: {this.state.clicked_invite}</Text>
                            <Text style={styles.ladderText}>Started Interview: {this.state.started_interview}</Text>
                            <Text style={styles.ladderText}>Completed: {this.state.completed}</Text>
                            <Text style={styles.ladderText}>Reviewed: {this.state.reviewed}</Text> 
                            <Text style={styles.ladderText}>Liked: {this.state.liked}</Text>
                        </ImageBackground>
                    </View>
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
        paddingTop: 20,
        height: 110, 
        backgroundColor: '#f5f5f5',
        marginBottom: 10
    },
    grayselcon: {
        marginTop: 15,        
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    grayselmem1: {
        padding: 0,
        marginLeft: 20,
        width: '40%',
        backgroundColor: '#FFFFFF',
        borderRadius:5
    },
    grayselmem2: {
        padding: 0,
        marginRight: 20,
        width: '40%',
        backgroundColor: '#FFFFFF',
        borderRadius:5
    },
    intvStabord: {
        margin: 10,
        marginLeft: 20,
        marginRight: 20,
        height: 250, 
        borderRadius:2,
        backgroundColor:'#FFFFFF', 
        shadowColor: '#000000',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.1
    },
    intvStatxtH: {
        paddingTop: 5,
        fontSize:18,
        color:'#000000',
        alignItems:'center', 
        justifyContent:'center', 
        textAlign: 'center'
    },
    intvStaF: {
        margin: 10,
        marginLeft: 20,
        marginRight: 20,

        height: 40,
        alignItems:'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    intvStaFC: {
        alignItems:'center',
        flexDirection: 'row',
    },    


    avgtimeboard: {
        margin:10,
        marginLeft: 20,
        marginRight: 20,

        height: 120, 
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

    avgtimeImg: {
        marginLeft: 30,
        padding: 20
    },

    agvtimeSta: {
        marginLeft: 20,
        fontSize: 13,
        fontWeight: 'bold',
        color: '#000000',
    },

    agvtimeStasm: {
        marginLeft: 20,
        fontSize: 8,
        color: '#6D6D6D',
    },

    agvtimeStacl: {
        marginLeft: 20,
        fontSize: 15,
        color: '#00BA52',
    },

 



    circleSchedul: {
        alignItems: 'center', 
        justifyContent: 'center',  
        backgroundColor: '#001C35',    
        width: 18,   
        height: 18, 
        borderRadius: 9,
        paddingRight: 5,
    },

    circleDrop: {
        alignItems: 'center', 
        justifyContent: 'center',  
        backgroundColor: '#F6BD00',    
        width: 18,   
        height: 18, 
        borderRadius: 9,
        paddingRight: 5,
    },


    circleComplete: {
        alignItems: 'center', 
        justifyContent: 'center',  
        backgroundColor: '#00BA52',    
        width: 18,   
        height: 18, 
        borderRadius: 9,
        paddingRight: 5,
    },
    ladderbord: {
        margin: 10,
        marginLeft: 20,
        marginRight: 20,

        height: 300, 
        borderRadius:2,
        backgroundColor:'#FFFFFF', 
        shadowColor: '#000000',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.1,
    },
    ladder:{
        paddingVertical: 10,
        paddingHorizontal: 30,
        backgroundColor: "#ffffff",
        flex:1
    },

    ladderImageBackground:{
        marginHorizontal:10,
        flex:1
    },

    ladderImage:{
        resizeMode:'stretch'
    },

    ladderText:{
        color:'#ffffff',
        fontSize:10,
        marginVertical:10,
        textAlign: 'center'
    }

})
