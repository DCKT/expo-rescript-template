

import * as React from "react";
import * as ReactNative from "react-native";
import * as ExpoStatusBar from "expo-status-bar";

var StatusBar = {};

var styles = ReactNative.StyleSheet.create({
      container: {
        backgroundColor: "#fff",
        alignItems: "center",
        flex: 1,
        justifyContent: "center"
      }
    });

function App(Props) {
  return React.createElement(ReactNative.View, {
              style: styles.container,
              children: null
            }, React.createElement(ReactNative.Text, {
                  children: "Open up App.res to start working on your app!"
                }), React.createElement(ExpoStatusBar.StatusBar, {
                  style: "auto"
                }));
}

var make = App;

var $$default = App;

export {
  StatusBar ,
  styles ,
  make ,
  $$default ,
  $$default as default,
  
}
/* styles Not a pure module */
