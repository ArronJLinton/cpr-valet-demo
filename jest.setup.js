import '@testing-library/react-native/extend-expect';

// Mock Expo modules
jest.mock('expo-camera', () => ({
  Camera: {
    requestCameraPermissionsAsync: jest.fn(),
    getCameraPermissionsAsync: jest.fn(),
  },
  CameraType: {
    back: 'back',
    front: 'front',
  },
}));

jest.mock('expo-location', () => ({
  requestForegroundPermissionsAsync: jest.fn(),
  getForegroundPermissionsAsync: jest.fn(),
  getCurrentPositionAsync: jest.fn(),
  reverseGeocodeAsync: jest.fn(),
}));

jest.mock('expo-media-library', () => ({
  requestPermissionsAsync: jest.fn(),
  getPermissionsAsync: jest.fn(),
  saveToLibraryAsync: jest.fn(),
}));

jest.mock('expo-image-picker', () => ({
  launchImageLibraryAsync: jest.fn(),
  launchCameraAsync: jest.fn(),
  MediaTypeOptions: {
    Images: 'Images',
    Videos: 'Videos',
    All: 'All',
  },
}));

jest.mock('expo-file-system', () => ({
  copyAsync: jest.fn(),
  readAsStringAsync: jest.fn(),
  writeAsStringAsync: jest.fn(),
  getInfoAsync: jest.fn(),
  makeDirectoryAsync: jest.fn(),
}));

jest.mock('expo-sqlite', () => ({
  openDatabase: jest.fn(),
}));

jest.mock('expo-constants', () => ({
  expoConfig: {
    extra: {},
  },
}));

// Mock React Native modules
jest.mock('react-native/Libraries/Alert/Alert', () => ({
  alert: jest.fn(),
}));

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// Mock date-fns
jest.mock('date-fns', () => ({
  format: jest.fn(date => date.toISOString()),
  parseISO: jest.fn(date => new Date(date)),
  isValid: jest.fn(date => date instanceof Date),
}));

// Global test utilities
global.mockNavigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
  reset: jest.fn(),
  setParams: jest.fn(),
  dispatch: jest.fn(),
  canGoBack: jest.fn(),
  isFocused: jest.fn(),
  addListener: jest.fn(),
  removeListener: jest.fn(),
};

global.mockRoute = {
  key: 'test-route',
  name: 'TestScreen',
  params: {},
};

// Suppress console warnings in tests
const originalWarn = console.warn;
const originalError = console.error;

beforeAll(() => {
  console.warn = jest.fn();
  console.error = jest.fn();
});

afterAll(() => {
  console.warn = originalWarn;
  console.error = originalError;
});
