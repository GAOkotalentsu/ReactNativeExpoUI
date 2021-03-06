import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native'

export default class Tabs extends Component {
    state = {
        activeTab: 0
    }

    render({ children } = this.props) {
        return (
            <View style={styles.container}>
                <View style={styles.tabsContainer}>
                    {children.map(({ props: { title } }, index) =>
                        <TouchableOpacity
                            style={[
                                styles.tabContainer,
                                index === this.state.activeTab ? styles.tabContainerActive : []
                            ]}
                            onPress={() => this.setState({ activeTab: index }) }
                            key={index}
                        >
                            <Text style={styles.tabText}>
                                {title}
                            </Text>
                        </TouchableOpacity>
                    )}
                </View>
                <View style={styles.contentContainer}>
                    {children[this.state.activeTab]}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tabsContainer: {
        flexDirection: 'row',
        paddingTop: 30
    },
    tabContainer: {
        flex: 1,
        paddingVertical: 15,
        borderBottomWidth: 3,
        borderBottomColor: 'transparent'
    },
    tabContainerActive: {
        borderBottomColor: '#00ba52'
    },
    tabText: {
        textAlign: 'center'
    },
    contentContainer: {
        flex: 1
    }
});

