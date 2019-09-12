import React, {PureComponent} from 'react'
import {
    View,
    StyleSheet,
    Text,
    Image,
    ImageBackground,
    ScrollView,
} from 'react-native'
import { LinearGradient } from 'expo'
import Svg, { Path, G } from 'react-native-svg'

export default class FirstScreen extends PureComponent{
    constructor(props){
        super(props)
        this.state={
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
        }
    }

    render(){
        return(
            <ScrollView>
                <View>
                    <View style={styles.container}>
                        <View style={{flexDirection:'row', justifyContent:'center'}}>
                            <View style={styles.openPositionsView}>
                                <Svg style={styles.containerImage} width="43" height="37.174">
                                    <G transform="translate(0 -0.729)">
                                        <G>
                                            <Path 
                                            d="M39.221,37.174H3.779A3.753,3.753,0,0,1,0,33.457V6.2A1.251,1.251,0,0,1,1.26,4.956H12.682V3.717A3.753,3.753,0,0,1,16.461,0H26.539a3.753,3.753,0,0,1,3.779,3.717V4.956h11.43A1.218,1.218,0,0,1,43,6.217V33.457A3.753,3.753,0,0,1,39.221,37.174ZM2.481,14.044h0V33.469A1.247,1.247,0,0,0,3.743,34.7H39.257a1.246,1.246,0,0,0,1.262-1.227V14.044L38.5,19.914a3.773,3.773,0,0,1-3.592,2.516h-7.1v1.226a1.247,1.247,0,0,1-1.263,1.227H16.45a1.246,1.246,0,0,1-1.262-1.227V22.431h-7.1a3.776,3.776,0,0,1-3.593-2.516Zm15.712,5.782V22.3h7.442V19.826Zm-1.349-2.479h10.14a1.255,1.255,0,0,1,1.267,1.239v1.239h7.13a1.264,1.264,0,0,0,1.2-.848L40.519,7.435H3.308L7.244,18.978a1.263,1.263,0,0,0,1.2.848h7.131V18.587A1.255,1.255,0,0,1,16.844,17.347ZM16.125,2.479a1.241,1.241,0,0,0-1.241,1.238V4.956h12.4V3.717a1.241,1.241,0,0,0-1.241-1.238Z" 
                                            transform="translate(0 0.729)" 
                                            fill="#fff"/>
                                        </G>
                                    </G>
                                </Svg>
                                <Text style={styles.containerText}>Open Positions</Text>
                                <Text style={styles.containerNumber}>{this.state.open_positions}</Text>
                            </View>
                            <View style={styles.videoInboxView}>
                                <Svg style={styles.containerImage} width="35" height="35">
                                    <Path 
                                    d="M30.9,35H4.1A4.106,4.106,0,0,1,0,30.9V4.1A4.106,4.106,0,0,1,4.1,0H30.9A4.106,4.106,0,0,1,35,4.1V30.9A4.106,4.106,0,0,1,30.9,35ZM2.734,10.938V30.9A1.369,1.369,0,0,0,4.1,32.266H30.9A1.369,1.369,0,0,0,32.266,30.9V10.938Zm17.793-8.2L26,8.2h4.267L24.8,2.734Zm-8.135,0L17.861,8.2h4.268L16.66,2.734Zm-8.291,0c-.038,0-.075,0-.111.005L9.453,8.2h4.541L8.526,2.734ZM2.734,5.351V8.2H5.586ZM28.662,2.734l3.6,3.6V4.1A1.369,1.369,0,0,0,30.9,2.734ZM13.056,28.427V15.038l10.8,6.725-10.8,6.664Zm2.735-8.465v3.564l2.874-1.774Z" 
                                    fill="#fff"/>
                                </Svg>
                                <Text style={styles.containerText}>Video Inbox</Text>
                                <Text style={styles.containerNumber}>{this.state.video_inbox}</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'center'}}>
                            <LinearGradient start={{x:1, y:0}} end={{x:0, y:1}} colors={['#00ec94', '#00c2b3']} style={styles.allVideosLG}>
                                <Svg style={styles.containerImage} width="42" height="31">
                                    <Path 
                                    d="M21,0s0,0,0,1.775V3.551h-.515c-.332,0-.811,0-1.395.011-1.169.013-2.756.038-4.434.089s-3.441.126-4.957.239A21.682,21.682,0,0,0,6.415,4.3a3.107,3.107,0,0,0-1.376.837,3.172,3.172,0,0,0-.773,1.381,50.421,50.421,0,0,0-.766,9v.02a50.42,50.42,0,0,0,.76,9.041,3.168,3.168,0,0,0,.782,1.3,3.1,3.1,0,0,0,1.364.8,21.547,21.547,0,0,0,3.292.415c1.516.112,3.275.188,4.957.238s3.266.076,4.434.089c.584.006,1.062.009,1.395.011h1.03c.332,0,.811,0,1.395-.011,1.168-.013,2.756-.038,4.434-.089s3.441-.126,4.957-.238a21.677,21.677,0,0,0,3.284-.413,3.107,3.107,0,0,0,1.376-.837,3.172,3.172,0,0,0,.773-1.381,50.419,50.419,0,0,0,.766-8.935v-.018a50.429,50.429,0,0,0-.766-9.073,3.173,3.173,0,0,0-.773-1.382A3.108,3.108,0,0,0,35.6,4.238a24.129,24.129,0,0,0-3.291-.377c-1.519-.1-3.281-.172-4.963-.218s-3.268-.069-4.437-.081c-.584-.006-1.063-.009-1.4-.01H21V1.775C21,0,21,0,21,0h.531c.338,0,.823,0,1.414.01,1.182.012,2.792.035,4.5.082s3.516.118,5.1.225A25.959,25.959,0,0,1,36.464.8l.061.016A6.6,6.6,0,0,1,39.473,2.6a6.74,6.74,0,0,1,1.669,3.043l-1.7.431,1.722-.315A54.018,54.018,0,0,1,42,15.538a54.017,54.017,0,0,1-.833,9.634q-.01.059-.024.116a6.74,6.74,0,0,1-1.669,3.043,6.6,6.6,0,0,1-2.947,1.785l-.024.007a23.913,23.913,0,0,1-3.946.528c-1.588.118-3.4.195-5.107.246s-3.318.077-4.5.09c-.592.006-1.077.01-1.416.011H20.469c-.338,0-.824,0-1.416-.011-1.183-.013-2.794-.039-4.5-.09s-3.52-.129-5.107-.246A23.911,23.911,0,0,1,5.5,30.123l-.01,0a6.592,6.592,0,0,1-2.907-1.7A6.732,6.732,0,0,1,.873,25.485c-.016-.056-.029-.113-.039-.171A54.023,54.023,0,0,1,0,15.534,54.022,54.022,0,0,1,.834,5.828q.01-.058.025-.116A6.739,6.739,0,0,1,2.527,2.669,6.6,6.6,0,0,1,5.474.884L5.5.877A23.936,23.936,0,0,1,9.445.349C11.032.232,12.847.154,14.552.1s3.318-.077,4.5-.09C19.645.006,20.13,0,20.469,0H21Z" 
                                    fill="#fff"/>
                                    <Path 
                                    d="M1.806,15A1.85,1.85,0,0,1,.9,14.762,1.752,1.752,0,0,1,0,13.244V1.757A1.752,1.752,0,0,1,.9.239,1.85,1.85,0,0,1,2.7.23L13.087,5.973a1.733,1.733,0,0,1,0,3.054L2.7,14.77A1.847,1.847,0,0,1,1.806,15ZM3.613,4.776v5.448L8.539,7.5Z" 
                                    transform="translate(15 8)" 
                                    fill="#fff"/>
                                </Svg>
                                <Text style={styles.containerText}>All Videos</Text>
                                <Text style={styles.containerNumber}>{this.state.all_videos}</Text>
                            </LinearGradient>
                            <LinearGradient start={{x:1, y:1}} end={{x:0, y:0}} colors={['#4e4bff', '#7cb2ff']} style={styles.likedCandidatesLG}>
                                <Svg style={styles.containerImage} width="42" height="32">
                                    <G transform="translate(0)">
                                        <Path 
                                        d="M12.452,32h-.38c-.487,0-.91-.008-1.256-.023A35.4,35.4,0,0,1,.559,30.18.829.829,0,0,1,0,29.361a9.925,9.925,0,0,1,.79-3.613.826.826,0,0,1,.758-.5.818.818,0,0,1,.328.069.835.835,0,0,1,.429,1.094A8.369,8.369,0,0,0,1.695,28.8,33.664,33.664,0,0,0,9.64,30.254l-.3-.844a.824.824,0,0,1-.035-.442l1.165-6.063-.651-1.774a12.26,12.26,0,0,0-3.4,1.112.807.807,0,0,1-.369.088.823.823,0,0,1-.74-.46.837.837,0,0,1,.369-1.118,13.222,13.222,0,0,1,2.218-.877c-.165-.12-.336-.258-.538-.43A6.211,6.211,0,0,1,5.1,14.785V10.967A6.056,6.056,0,0,1,7.447,6.13a8.042,8.042,0,0,1,4.947-1.651,7.139,7.139,0,0,1,5.315,2.2,7.4,7.4,0,0,1,1.681,5.758v2.349a6.461,6.461,0,0,1-2.765,5.089,13.991,13.991,0,0,1,1.888.711,10.988,10.988,0,0,1,6.827-5.3c-.237-.176-.408-.313-.537-.43a6.206,6.206,0,0,1-2.252-4.662V7.815a7.993,7.993,0,0,1,2.193-5.844A6.866,6.866,0,0,1,29.623,0c3.589,0,7.222,2.684,7.222,7.813V10.19a6.46,6.46,0,0,1-2.765,5.087,12.4,12.4,0,0,1,4.626,2.471A9.56,9.56,0,0,1,42,24.764a.838.838,0,0,1-.558.819,35.449,35.449,0,0,1-10.257,1.8c-.328.013-.758.02-1.279.02h-.36c-.52,0-.95-.007-1.276-.02a38.344,38.344,0,0,1-4.069-.347,10.431,10.431,0,0,1,.346,2.324.83.83,0,0,1-.559.819,35.383,35.383,0,0,1-10.257,1.8C13.385,31.993,12.955,32,12.452,32Zm-.182-8.335H12l-1.036,5.392.457,1.27c.172,0,.371.006.707.006h.274c.308,0,.521,0,.714-.006l.459-1.27-1.036-5.392h-.273Zm2.459-2.534-.649,1.773,1.165,6.063a.837.837,0,0,1-.035.443l-.3.843A33.835,33.835,0,0,0,22.853,28.8a8.258,8.258,0,0,0-.6-2.376.83.83,0,0,1-.083-.187A8.214,8.214,0,0,0,18.6,22.487l-.005,0a.854.854,0,0,1-.173-.1A12.327,12.327,0,0,0,14.729,21.132Zm14.727-2.061-1.038,5.39.458,1.271c.223,0,.454.005.707.005h.321c.217,0,.442,0,.669-.005l.458-1.271-1.038-5.39h-.538Zm2.726-2.536-.652,1.774L32.7,24.371a.831.831,0,0,1-.034.443l-.305.845a33.871,33.871,0,0,0,7.947-1.454C39.7,18.32,33.936,16.846,32.182,16.535Zm-4.915,0a9.85,9.85,0,0,0-7.3,4.847,10.816,10.816,0,0,1,1.288.962,9.568,9.568,0,0,1,2.264,2.9c1.166.194,2.369.332,3.574.411l-.305-.845a.833.833,0,0,1-.034-.443l1.166-6.062-.652-1.773ZM12.271,22h.38l.249-.683c-.22.021-.427.031-.612.031h-.047c-.175,0-.375-.012-.595-.031L11.9,22Zm-2.8-10.294a3.453,3.453,0,0,1-2.716,1.518v1.561a5.244,5.244,0,0,0,3.78,4.611h.005l.022.005.014,0,.014,0a.914.914,0,0,1,.094.034,5.547,5.547,0,0,0,1.568.239h.04a5.325,5.325,0,0,0,1.62-.261l.007,0,.006,0a5.954,5.954,0,0,0,1.492-.723,4.838,4.838,0,0,0,2.322-3.91V13.243H13.553a5.016,5.016,0,0,1-4.082-1.536h0ZM29.1,16.721l.251.685H30.1l.251-.685c-.224.021-.431.031-.614.031h-.047C29.508,16.75,29.309,16.74,29.1,16.721ZM24.205,8.647V10.19a5.244,5.244,0,0,0,3.747,4.6,1.08,1.08,0,0,1,.2.064,5.622,5.622,0,0,0,1.548.232h.032a5.744,5.744,0,0,0,3.137-.989,4.837,4.837,0,0,0,2.321-3.907V8.645H33.545A5.073,5.073,0,0,1,29.56,6.919a6.45,6.45,0,0,1-3.475,1.728ZM9.32,9.539a.815.815,0,0,1,.582.242c.074.074.145.147.214.218l.064.065.057.059a3.644,3.644,0,0,0,3.316,1.454h4.225A5.384,5.384,0,0,0,16.491,7.8a5.491,5.491,0,0,0-4.1-1.658c-2.734,0-5.64,1.69-5.64,4.822v.588c.69-.072,1.212-.351,1.832-1.564a.828.828,0,0,1,.606-.441A.863.863,0,0,1,9.32,9.539Zm20.3-7.874c-2.26,0-5.025,1.393-5.38,5.317h1.84a3.971,3.971,0,0,0,1.547-.674,3.423,3.423,0,0,0,1.184-1.05.825.825,0,0,1,.731-.647.448.448,0,0,1,.076,0,.822.822,0,0,1,.765.519A3.154,3.154,0,0,0,33.545,6.98h1.607A5.49,5.49,0,0,0,29.623,1.665Z" 
                                        fill="#fff"/>
                                        <Path 
                                        d="M1.49,3a1.485,1.485,0,0,0,1.055-.438l.021-.021A1.489,1.489,0,1,0,.455.438L.434.459A1.489,1.489,0,0,0,1.49,3Z" 
                                        transform="translate(1 22)" 
                                        fill="#fff"/>
                                    </G>
                                </Svg>
                                <Text style={styles.containerText}>Liked Candidates</Text>
                                <Text style={styles.containerNumber}>{this.state.liked_candidates}</Text>
                            </LinearGradient>
                        </View>
                    </View>
                    <View style={styles.graph}>
                        <Text style={{fontSize:18, marginLeft:30, marginVertical:20}}>Interviews Created vs. Taken</Text>
                        <Image source={require("../../assets/images/dashboard/interview_graph.png")} style={{alignSelf:'stretch', resizeMode:'contain', width:'100%'}}></Image>
                    </View>
                    <View style={styles.ladder}>
                        <Text style={{fontSize:18, textAlign:'center', marginVertical:20}}>Positions Funnel</Text>
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
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: "#ffffff",
        flex:1
    },
    containerImage:{
        width:40,
        height:40,
        marginVertical:10
    }, 
    containerText:{
        fontSize:14,
        color:'#ffffff',
        marginVertical:5
    },
    containerNumber:{
        fontSize:12,
        color:'#ffffff',
        marginVertical:5
    },
    graph:{
        backgroundColor: "#ffffff",
        flex:1
    },
    ladder:{
        paddingVertical: 20,
        paddingHorizontal: 30,
        backgroundColor: "#ffffff",
        flex:1
    },
    openPositionsView:{
        marginVertical: 10,
        marginHorizontal: 10,
        paddingVertical: 20,
        paddingHorizontal: 20,
        width: '45%',
        aspectRatio: 1,
        backgroundColor: '#45d7e5',
        borderRadius: 5
    },
    videoInboxView:{
        marginVertical: 10,
        marginHorizontal: 10,
        paddingVertical: 20,
        paddingHorizontal: 20,
        width: '45%',
        aspectRatio: 1,
        backgroundColor: '#1baf17',
        borderRadius: 5
    },
    allVideosLG:{
        marginVertical: 10,
        marginHorizontal: 10,
        paddingVertical: 20,
        paddingHorizontal: 20,
        width: '45%',
        aspectRatio: 1,
        borderRadius: 5
    },
    likedCandidatesLG:{
        marginVertical: 10,
        marginHorizontal: 10,
        paddingVertical: 20,
        paddingHorizontal: 20,
        width: '45%',
        aspectRatio: 1,
        borderRadius: 5
    },
    ladderText:{
        color:'#ffffff',
        fontSize:10,
        marginVertical:15,
        textAlign: 'center'
    },
    ladderImageBackground:{
        marginHorizontal:10,
        flex:1
    },
    ladderImage:{
        resizeMode:'stretch'
    }
})
