import React from 'react';
import { Platform, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default Content = (props) => (
  <KeyboardAwareScrollView
    enableOnAndroid
    enableAutomaticScroll
    keyboardOpeningTime={0}
    extraHeight={Platform.select({ android: 200 })}
  >
    <View style={{...props.styles}}>
      {props.children}
    </View>
  </KeyboardAwareScrollView>
);