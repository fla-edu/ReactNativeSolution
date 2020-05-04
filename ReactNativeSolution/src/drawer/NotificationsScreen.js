import React, {Component} from 'react'
import { Text, View, Platform, StyleSheet, Alert } from 'react-native';
import { CustomHeader } from '../index'
import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';

export class NotificationsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CustomHeader title="Notifications" navigation={this.props.navigation}/>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <RNSketchCanvas
            containerStyle={{ backgroundColor: 'transparent', flex: 1 }}
            canvasStyle={{ backgroundColor: 'transparent', flex: 1 }}
            defaultStrokeIndex={0}
            defaultStrokeWidth={5}
            closeComponent={<View style={styles.functionButton}><Text style={{color: 'white'}}>Fechar</Text></View>}
            undoComponent={<View style={styles.functionButton}><Text style={{color: 'white'}}>Desfazer</Text></View>}
            clearComponent={<View style={styles.functionButton}><Text style={{color: 'white'}}>Limpar</Text></View>}
            eraseComponent={<View style={styles.functionButton}><Text style={{color: 'white'}}>Apagar</Text></View>}
            strokeComponent={color => (
              <View style={[{ backgroundColor: color }, styles.strokeColorButton]} />
            )}
            strokeSelectedComponent={(color, index, changed) => {
              return (
                <View style={[{ backgroundColor: color, borderWidth: 2 }, styles.strokeColorButton]} />
              )
            }}
            strokeWidthComponent={(w) => {
              return (<View style={styles.strokeWidthButton}>
                <View  style={{
                  backgroundColor: 'white', marginHorizontal: 2.5,
                  width: Math.sqrt(w / 3) * 10, height: Math.sqrt(w / 3) * 10, borderRadius: Math.sqrt(w / 3) * 10 / 2
                }} />
              </View>
            )}}
            saveComponent={<View style={styles.functionButton}><Text style={{color: 'white'}}>Salvar</Text></View>}
            savePreference={() => {
              return {
                folder: 'RNSketchCanvas',
                filename: String(Math.ceil(Math.random() * 100000000)),
                transparent: false,
                imageType: 'png',
                cropToImageSize: true
              }
            }}
            onSketchSaved={(success, filePath) => { alert(success ? 'Image saved!' : 'Failed to save image!', filePath); }}
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={'We need your permission to use your camera phone'}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  },
  strokeColorButton: {
    marginHorizontal: 2.5, marginVertical: 8, width: 30, height: 30, borderRadius: 15,
  },
  strokeWidthButton: {
    marginHorizontal: 2.5, marginVertical: 8, width: 30, height: 30, borderRadius: 15,
    justifyContent: 'center', alignItems: 'center', backgroundColor: '#39579A'
  },
  functionButton: {
    marginHorizontal: 2.5, marginVertical: 8, height: 30, width: 60,
    backgroundColor: '#39579A', justifyContent: 'center', alignItems: 'center', borderRadius: 5,
  }
});


{/* <CustomHeader title="Notifications" navigation={this.props.navigation}/> */}