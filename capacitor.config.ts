import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ecommerce.app',
  appName: 'Ecommerce',
  webDir: 'out',
  server: {
    androidScheme: 'https',
  },
  android: {
    buildOptions: {
      keystorePath: 'android.keystore',
      keystorePassword: '',
      keystoreAlias: '',
      keystoreAliasPassword: '',
      signingType: 'apksigner',
    },
  },
};

export default config;
