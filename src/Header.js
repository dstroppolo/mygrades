import React from 'react';
import { Container, Header, Body, Right, Button, Icon, Title } from 'native-base';

import { withNavigation } from 'react-navigation';


class AppHeader extends React.Component {

    render() {
        return (
                <Header style={{paddingTop:50, paddingBottom:25, marginBottom: 30, backgroundColor: "#050505"}}>
                    <Body>
                        <Title>{this.props.title}</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.props.navigation.openDrawer() }>
                            <Icon name='menu' />
                        </Button>
                    </Right>
                  </Header>
        )
    }
}
              

export default withNavigation(AppHeader);