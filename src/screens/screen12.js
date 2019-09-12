import React, {PureComponent} from 'react'
import {
    View,
    StyleSheet,
    Text,
    ImageBackground,
    Dimensions
} from 'react-native'
import ImageSlider from 'react-native-image-slider'
import Const from '../common/const'

export default class Screen07 extends PureComponent{
    constructor(props){
        super(props)
        this.state={

        }
    }
    
    render() {
        const images = [
            require('../../assets/images/onboarding/onboarding1.png'),
            require('../../assets/images/onboarding/onboarding2.png'),
            require('../../assets/images/onboarding/onboarding3.png'),
        ];
        
        const firstLines = [
            "Schedule digital interviews, screen",
            "Record interviews and evaluate",
            "Recruit the sharpest talent..."
        ]

        const secondLines = [
            "candidates, and hire the best",
            "candidates on your smartphone",
            "All while saving time!"
        ]

        return(               
            <View style={styles.background}>
                <ImageSlider
                    loopBothSides
                    autoPlayWithInterval={3000}
                    images={images}
                    customSlide={({index, item, style}) => (
                        <View key={index} style={[style, styles.customSlide]}>
                            <ImageBackground source={item} style={styles.image}>
                                <Text style={styles.firstLine}>{firstLines[index]}</Text>
                                <Text style={styles.secondLine}>{secondLines[index]}</Text>
                            </ImageBackground>
                        </View>
                    )}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    background:{
        flex:1
    },
    image:{
        resizeMode:'cover',
        flex:1
    },
    firstLine:{
        textAlign:'center',
        marginTop:Dimensions.get("screen").height * 0.75,
        color:'#ffffff',
        fontSize:12,
        paddingVertical:5
    },
    secondLine:{
        textAlign:'center',
        color:'#ffffff',
        fontSize:12,
        paddingVertical:5
    }
})