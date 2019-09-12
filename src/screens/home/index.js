import React, {PureComponent} from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    ScrollView,
} from 'react-native'

import {Actions} from 'react-native-router-flux'

export default class MyCart extends PureComponent{
    constructor(props){
        super(props)
        this.state={

        }
    }

    onPress1Screen(){
        Actions.Screen1()
    }
    onPress2Screen(){
        Actions.Screen2()
    }
    onPress3Screen(){
        Actions.Screen3()
    }
    onPress4Screen(){
        Actions.Screen4()
    }
    onPress5Screen(){
        Actions.Screen5()
    }
    onPress6Screen(){
        Actions.Screen6()
    }
    onPress7Screen(){
        Actions.Screen7()
    }
    onPress8Screen(){
        Actions.Screen8()
    }
    onPress9Screen(){
        Actions.Screen9()
    }
    onPress10Screen(){
        Actions.Screen10()
    }
    onPress11Screen(){
        Actions.Screen11()
    }
    onPress12Screen(){
        Actions.Screen12()
    }
    render(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.btnContainer} onPress={()=>{this.onPress1Screen()}}>
                        <Text style={styles.btnText}>1 Screen</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnContainer} onPress={()=>{this.onPress2Screen()}}>
                        <Text style={styles.btnText}>2 Screen</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnContainer} onPress={()=>{this.onPress3Screen()}}>
                        <Text style={styles.btnText}>3 Screen</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnContainer} onPress={()=>{this.onPress4Screen()}}>
                        <Text style={styles.btnText}>4 Screen</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnContainer} onPress={()=>{this.onPress5Screen()}}>
                        <Text style={styles.btnText}>5 Screen</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnContainer} onPress={()=>{this.onPress6Screen()}}>
                        <Text style={styles.btnText}>6 Screen</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnContainer} onPress={()=>{this.onPress7Screen()}}>
                        <Text style={styles.btnText}>7 Screen</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnContainer} onPress={()=>{this.onPress8Screen()}}>
                        <Text style={styles.btnText}>8 Screen</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnContainer} onPress={()=>{this.onPress9Screen()}}>
                        <Text style={styles.btnText}>9 Screen</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnContainer} onPress={()=>{this.onPress10Screen()}}>
                        <Text style={styles.btnText}>10 Screen</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnContainer} onPress={()=>{this.onPress11Screen()}}>
                        <Text style={styles.btnText}>11 Screen</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnContainer} onPress={()=>{this.onPress12Screen()}}>
                        <Text style={styles.btnText}>12 Screen</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingVertical:50,
        paddingHorizontal:20,
    },
    btnContainer:{
        backgroundColor: 'rgb(63, 175, 200)',
        borderRadius:5,
        paddingHorizontal:30,
        paddingVertical: 10,
        marginVertical:10,
    },
    btnText:{
        color: '#fff',
        textAlign:'center',
    },
})