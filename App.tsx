import React from 'react';
// import {useCameraDevices} from 'react-native-vision-camera';
import {useCameraPermission} from './src/hooks/useCameraPermission';
import LoadingView from './src/components/LoadingView';
import PermissionDenied from './src/components/PermissionDenied';
import ObjectDetector from './src/components/ObjectDetector';
import {useCameraDevices} from 'react-native-vision-camera';

export default function App() {
  const devices = useCameraDevices();
  const device = devices.back;

  const {pending, isPermissionGranted} = useCameraPermission();

  if (!device || pending) {
    return <LoadingView />;
  }
  if (!isPermissionGranted) {
    return <PermissionDenied />;
  }
  return <ObjectDetector device={device} />;
}
