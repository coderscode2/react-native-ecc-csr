// src/index.ts
import { NativeModules } from 'react-native';

type CurveType = 'P-256' | 'P-384' | 'P-521';

interface ECCCSRModule {
  generateCSR(
    alias?: string,
    curve?: CurveType,
    cn?: string,
    userId?: string,
    country?: string,
    state?: string,
    locality?: string,
    organization?: string,
    organizationalUnit?: string
  ): Promise<string>;

  getPublicKey(alias?: string): Promise<string>;

  generateKeyPair(alias?: string, curve?: CurveType): Promise<void>;
}

const { ECCCSRModule } = NativeModules;

export default ECCCSRModule as ECCCSRModule;
