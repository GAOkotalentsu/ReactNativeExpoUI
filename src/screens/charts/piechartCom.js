import React, {PureComponent} from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';

import { Svg } from 'expo';
const { Circle, Text } = Svg;

import { PieChart, LineChart, Grid } from 'react-native-svg-charts';



export default class piechartCom extends PureComponent{
    constructor(props){
        super(props)
          this.state = {
          };
        
    }

  
    render(){
        let {data}  = this.props
        const Labels = ({ slices, height, width }) => {
            return slices.map((slice, index) => {
                const { labelCentroid, pieCentroid, data } = slice;
                return (
                    <Text
                        key={index}
                        x={pieCentroid[ 0 ]}
                        y={pieCentroid[ 1 ]}
                        fill={'white'}
                        textAnchor={'middle'}
                        alignmentBaseline={'middle'}
                        fontSize={12}
                        stroke={'white'}
                        strokeWidth={0.1}
                    >
                        {data.amount + '%'}
                    </Text>
                )
            })
        }

        return(
            <View style={styles.intvstabord}>
                <PieChart
                    style={{ height: 150 }}
                    valueAccessor={({ item }) => item.amount}
                    data={data}
                    outerRadius={'70%'}
                    innerRadius={0}
                >
                    <Labels />
                </PieChart>
            </View>                
        )
    }
}

const styles = StyleSheet.create({    
    intvstabord: {
        margin: 10,
        marginLeft: 20,
        marginRight: 20,
        transform: [{ rotate: '0deg'}],
    },
})
