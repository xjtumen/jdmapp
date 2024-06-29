import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";
import Constants from "expo-constants";

export default function TabThreeWebview() {
  // const [result, setResult] = useState(null);
  // const _handlePressButtonAsync = async () => {
  //   let result = await WebBrowser.openBrowserAsync('https://expo.dev');
  //   setResult(result);
  // };
  // return (
  //   <View style={styles.container}>
  //     <Button title="Open WebBrowser" onPress={_handlePressButtonAsync} />
  //     <Text>{result && JSON.stringify(result)}</Text>
  //   </View>
  // );

  return (
    <View style={styles.container}>
      {/*<ImageBackground source={{*/}
      {/*  uri: Asset.fromModule(require("@/assets/images/background-image.png")).uri,*/}
      {/*}} style={styles.image}>*/}
      {/*<Text style={styles.text}>Elements</Text>*/}
      {/*<Text style={styles.text}>in Front of</Text>*/}
      {/*<Text style={styles.text}>Background</Text>*/}
      <WebView
        // style={styles.container}
        originWhitelist={["*"]}
        source={{ uri: "https://xjtu.men/" }}
        style={{ flex: 1 }}
        // source={{ html: '<h1><div style="text-align: center;">Hello world</div></h1>' }}
      />
      {/*</ImageBackground>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: Constants.statusBarHeight,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0",
  },
});
