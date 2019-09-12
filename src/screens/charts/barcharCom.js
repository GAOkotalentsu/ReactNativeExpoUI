import React, {PureComponent} from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
} from 'react-native';

import { BarChart, Grid, XAxis, YAxis } from 'react-native-svg-charts';
import { Svg } from 'expo';
const { LinearGradient, Defs, Stop  } = Svg;

export default class Screen11 extends PureComponent{
    constructor(props){
        super(props)
          this.state = {

          };        
    }
  
    render(){

        const axesSvg = { fontSize: 10, fill: '#A8A8A8' };
        const verticalContentInset = { top: 10, bottom: 10 };
        const xAxisHeight = 30;

        
        const Gradient1 = () => (
            <Defs key={'gradient1'}>
                <LinearGradient id={'gradient1'} x1={'0%'} y={'0%'} x2={'0%'} y2={'100%'}>
                    <Stop offset={'0%'} stopColor={'#00BA52'}/>
                    <Stop offset={'100%'} stopColor={'#FFFFFF'}/>
                </LinearGradient>
            </Defs>
        )

        const Gradient2 = () => (
            <Defs key={'gradient2'}>
                <LinearGradient id={'gradient2'} x1={'0%'} y1={'0%'} x2={'0%'} y2={'100%'}>
                    <Stop offset={'0%'} stopColor={'#001C35'}/>
                    <Stop offset={'100%'} stopColor={'#FFFFFF'}/>
                </LinearGradient>
            </Defs>
        )
        const monthNam = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nob' ,'Dec'];
        const perform = [0,  20,  40];
        
        const data1 = [ 14, 15, 18, 18, 13, 13, 13, 13, 15, 15, 18, 25]
            .map((value) => ({ value }))
        const data2 = [ 24, 18, 23, 22, 18, 25, 15, 13, 18, 24, 28, 36]
            .map((value) => ({ value }))

        const barData = [
            {
                data: data1,
                svg: {
                    fill: 'url(#gradient1)',
                },
                arc: { outerRadius: '200%', cornerRadius: 10,  padAngle:5, },
            },
            {
                data: data2,
                svg: {
                    fill: 'url(#gradient2)',
                },
                arc: { outerRadius: '100%', cornerRadius: 50,  padAngle:1, },
            },
        ]

        return(
            <ScrollView style={styles.container}>
                <View style={{ height: 200, padding: 20, flexDirection: 'row' }}>
                    <YAxis
                            style={{ marginVertical: -5}}
                            data={perform}
                            formatLabel={(value, index) => value + '%'}
                            contentInset={verticalContentInset}
                            svg={axesSvg}
                            numberOfTicks={4}
                    />
                    <View style={{ flex: 1}}>                    
                        <BarChart
                            style={ { height: 150 } }
                            data={ barData }
                            yAccessor={({ item }) => item.value}
                            spacingInner = {0.5}
                            numberOfTicks={4}
                            contentInset={{ top: 0, bottom: 30 }}
                            { ...this.props }
                        >
                            <Grid/>
                            <Gradient1 />
                            <Gradient2 />
                        </BarChart>
                        <XAxis
                            style={{ marginHorizontal: -15, height: xAxisHeight }}
                            data={data2}
                            formatLabel={(value, index) => monthNam[index]}
                            contentInset={{ left: 20, right: 20 }}
                            svg={axesSvg}
                        />
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
    
    intvstabord: {
        margin: 10,
        marginLeft: 20,
        marginRight: 20,
        transform: [{ rotate: '0deg'}],

        height: 250
    },

    intvstatxth: {
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
    
})
