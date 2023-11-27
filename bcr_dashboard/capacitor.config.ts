import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'bcr_dashboard',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    "url": "http://localhost:8100/"
  }
};

export default config;
