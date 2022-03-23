import createDebug from 'debug';
import { AztecSdk, createAztecSdk, JsonRpcProvider } from '@aztec/sdk';
import { Config } from '../../config';
import { Obs } from 'app/util';

const debug = createDebug('zm:sdk_obs');

export type SdkObsValue = AztecSdk | undefined;
export type SdkObs = Obs<SdkObsValue>;

export function createSdkObs(config: Config) {
  const { rollupProviderUrl, chainId, debug: isDebug, saveProvingKey } = config;
  const minConfirmation = chainId === 1337 ? 1 : undefined; // If not ganache, use the default value.
  const aztecJsonRpcProvider = new JsonRpcProvider(config.ethereumHost);
  return Obs.promise<SdkObsValue>(
    createAztecSdk(aztecJsonRpcProvider, rollupProviderUrl, {
      debug: isDebug,
      saveProvingKey,
      minConfirmation,
    }).catch(e => {
      debug('Failed to create sdk', e);
      return undefined;
    }),
    undefined,
  );
}