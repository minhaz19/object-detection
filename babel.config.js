module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'react-native-reanimated/plugin',
      {
        globals: ['__detectObjects'],
      },
    ],
    ['react-native-worklets-core/plugin'],
  ],
};
