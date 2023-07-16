import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.primate',
  appName: 'Primate',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000, // Duration in milliseconds to show the splash screen after app launch (Android only)
    },
  },
};

export default config;
