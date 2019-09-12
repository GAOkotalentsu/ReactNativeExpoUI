import React, { PureComponent } from "react";
import Color from "./common/color"
import { KeyboardAvoidingView, StyleSheet } from "react-native";
import {
    Scene,
    Router,
    Actions,
    Overlay,
    Tabs,
    Modal,
    Stack,
    Lightbox,
} from 'react-native-router-flux';
import NavBar from '@screens/navbar/navBar'
import Home from '@screens/home'
import Screen1 from '@screens/screen1'
import Screen2 from '@screens/screen2'
import Screen3 from '@screens/screen3'
import Screen4 from '@screens/screen4'
import Screen5 from '@screens/screen5'
import Screen6 from '@screens/screen6'
import Screen7 from '@screens/screen7'
import Screen8 from '@screens/screen8'
import Screen9 from '@screens/screen9'
import Screen10 from '@screens/screen10'
import Screen11 from '@screens/screen11'
import Screen12 from '@screens/screen12'

export default class Root extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    
    render() {
        const scenes = Actions.create(
            <Overlay key="overlay">
                <Modal key="modal" hideNavBar>
                    <Lightbox key="lightbox">
                        <Stack key="root" hideNavBar>
                            <Scene hideNavBar>
                                <Tabs
                                    key="TabBar"
                                    backToInitial
                                    onTabOnPress={() => {
                                    }}
                                    swipeEnabled
                                    tabBarStyle={styles.tabBarStyle}
                                    activeBackgroundColor="white"
                                    inactiveTintColor={Color.lightText}
                                    activeTintColor={Color.primary}
                                    inactiveBackgroundColor="white">

                                    <Scene key="Home" tabBarLabel="Home" navBar={NavBar} hideTabBar>
                                        <Scene key="Home" component={Home} hideTabBar hideNavBar initial></Scene>
                                        <Scene key="Screen1" component={Screen1} hideTabBar hideNavBar></Scene>
                                        <Scene key="Screen2" component={Screen2} hideTabBar navBar={NavBar} title={'Dashboard'}></Scene>
                                        <Scene key="Screen3" component={Screen3} hideTabBar navBar={NavBar} title={'Positions'}></Scene>
                                        <Scene key="Screen4" component={Screen4} hideTabBar navBar={NavBar} title={'My Account'}></Scene>
                                        <Scene key="Screen5" component={Screen5} hideTabBar navBar={NavBar} title={'Interview'}></Scene>
                                        <Scene key="Screen6" component={Screen6} hideTabBar navBar={NavBar} title={'Settings'}></Scene>
                                        <Scene key="Screen7" component={Screen7} hideTabBar navBar={NavBar} title={'Interview'}></Scene>
                                        <Scene key="Screen8" component={Screen8} hideTabBar navBar={NavBar} title={'Review Candidate'}></Scene>
                                        <Scene key="Screen9" component={Screen9} hideTabBar navBar={NavBar} title={'Reports'}></Scene>
                                        <Scene key="Screen10" component={Screen10} hideTabBar navBar={NavBar} title={'New Position'}></Scene>
                                        <Scene key="Screen11" component={Screen11} hideTabBar navBar={NavBar} title={'New Position'}></Scene>
                                        <Scene key="Screen12" component={Screen12} hideTabBar hideNavBar></Scene>
                                    </Scene>
                                </Tabs>
                            </Scene>
                        </Stack>
                    </Lightbox>
                </Modal>
            </Overlay>
        );


        return (
            <KeyboardAvoidingView
                behavior={'padding'}
                style={{ flex: 1 }}>
                <Router hideNavBar scenes={scenes} onStateChange={(props) => { }} />
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBarStyle: {
        backgroundColor: '#eee',
    },
    tabBarSelectedItemStyle: {
        backgroundColor: '#ddd',
    },
});