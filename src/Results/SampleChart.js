import React from 'react'
import { BarChart, Grid, YAxis } from 'react-native-svg-charts'
import { Container, Content } from 'native-base';
import styles from '../styles';
import { View, Text } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';


export default class OverviewChart extends React.PureComponent {


    render() {

        const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

        const contentInset = { top: 20, bottom: 20 }

        return (
            <Container style={styles.main}>
                <Content style={styles.wrapper}>
                    <Dropdown
                        label={`Select a Semester`}
                        data={ this.props.allSemesters.map( semester => { return {value: semester} }) }
                        selectedItemColor="#c4c4c4"
                        itemColor="#fff"
                        pickerStyle={{backgroundColor:"#050505"}}
                    />
                    <View style={{ height: 200, flexDirection: 'row' }}>
                        <YAxis
                            data={ data }
                            contentInset={ contentInset }
                            svg={{
                                fill: 'grey',
                                fontSize: 10,
                            }}
                            numberOfTicks={ 10 }
                            formatLabel={ value => `${value}ºC` }
                        />
                        <BarChart
                            style={{ flex: 1, marginLeft: 16 }}
                            data={ data }
                            svg={{ stroke: 'rgb(134, 65, 244)' }}
                            contentInset={ contentInset }
                        >
                            <Grid/>
                        </BarChart>
                    </View>
                </Content>
            </Container>
        )
    }

}