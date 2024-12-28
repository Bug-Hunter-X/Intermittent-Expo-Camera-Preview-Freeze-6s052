// cameraBugSolution.js
import * as React from 'react';
import { Camera, CameraType } from 'expo-camera';

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = React.useState(null);
  const [type, setType] = React.useState(CameraType.back);
  const [cameraRef, setCameraRef] = React.useState(null);
  const [restartCamera, setRestartCamera] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleRestartCamera = () => {
    setRestartCamera(true);
  }

  if (hasPermission === null) {
    return <View />; }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={ref => setCameraRef(ref)}>
        <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row' }}>
          <TouchableOpacity style={{flex: 1, alignSelf: 'flex-end', margin: 10}} onPress={() => {
              setType(
                type === CameraType.back ? CameraType.front : CameraType.back
              );
          }}>
            <Text>Flip Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, alignSelf: 'flex-end', margin: 10}} onPress={() => handleRestartCamera()} >
          <Text>Restart Camera</Text>
          </TouchableOpacity>
        </View>
      </Camera>
      {restartCamera && <React.Fragment>
        <Text>Restarting Camera...</Text> 
        {/*Add some delay or condition to trigger a remount*/} 
      </React.Fragment>}
    </View>
  );
};
export default CameraScreen;