open ReactNative

module StatusBar = {
  @module("expo-status-bar") @react.component
  external make: (~style: string) => React.element = "StatusBar"
}

let styles = {
  open Style

  StyleSheet.create({
    "container": viewStyle(
      ~flex=1.,
      ~backgroundColor="#fff",
      ~alignItems=#center,
      ~justifyContent=#center,
      (),
    ),
  })
}

@react.component
let make = () => {
  <View style={styles["container"]}>
    <Text> {"Open up App.res to start working on your app!"->React.string} </Text>
    <StatusBar style="auto" />
  </View>
}

let default = make
