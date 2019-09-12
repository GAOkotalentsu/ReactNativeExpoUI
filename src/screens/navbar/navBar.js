import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'
import { Actions } from 'react-native-router-flux'
import Svg, {G, Rect} from 'react-native-svg'
import Device from '../../common/device'
import Const from '../../common/const'

export default class NavBar extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
    }

    render() {
        let {onRight, rightTitle, title, description, scenes}  = this.props
        console.log(title)
        return (
            <View style={styles.headerContainer}>
                <View style={styles.titleContainer}>
                    <Text numberOfLines={1} style={styles.title}>{title}</Text>
                    {description && description!='' && <Text style={styles.description}>{description}</Text>}
                </View>
                {scenes.length > 1 && <TouchableOpacity onPress={()=>Actions.pop()} style={styles.left}>
                <Svg width="15.5" height="15.91">
                    <G transform="translate(15.5) rotate(180)">
                        <Rect width="9.778" height="2.734" rx="1.367" transform="translate(15.111) rotate(-180)" fill="#231f20"/>
                        <Rect width="15.5" height="2.734" rx="1.367" transform="translate(15.5 -6.588) rotate(-180)" fill="#231f20"/>
                        <Rect width="9.778" height="2.734" rx="1.367" transform="translate(15.111 -13.176) rotate(-180)" fill="#231f20"/>
                    </G>
                </Svg>
                </TouchableOpacity>}
                <TouchableOpacity style={styles.right}>
                    <Image source={require('../../../assets/images/user/man.png')} style={{width:Device.ToolbarHeight + 5, height:Device.ToolbarHeight + 5}}></Image>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    headerContainer:{
        width:'100%',
        height: Const.navBarHeight + Device.ToolbarHeight, 
        paddingTop: Device.ToolbarHeight + 5,
        flexDirection:'row', 
        alignItems:'center', 
        backgroundColor:'#ffffff',
        paddingHorizontal: 20,
        backgroundColor: 'white',
    },
    
    title:{
        fontSize:14,
        fontWeight:'bold',
        color:'#231F20',
        paddingBottom: 15
    },

    description:{
        marginTop:5,
        fontSize:12,
        color:'white',
    },

    titleContainer:{
        flex:1,
        alignItems:'center',
        marginHorizontal:40
    },

    left:{
        paddingVertical:5,
        paddingHorizontal:20,
        position:'absolute',
        bottom:10,
    },
    right:{
        position: 'absolute',
        paddingVertical:8,
        paddingHorizontal:20,
        right:0,
        marginBottom:10
    },
    rightText:{
        fontSize:12,
        color:'white',
    }
})