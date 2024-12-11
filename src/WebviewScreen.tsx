import React from 'react';
import WebView from 'react-native-webview';

export const WebViewScreen = () => {
  return <WebView source={{uri: 'https://www.google.com'}} />;
};
