import { EthAddress } from '@aztec/sdk';
import { mapObj } from '../../app/util/objects.js';

export const KNOWN_MAINNET_ASSET_ADDRESS_STRS = {
  ETH: '0x0000000000000000000000000000000000000000',
  DAI: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
  renBTC: '0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D',
  wstETH: '0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0',
  stETH: '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84',
  yvETH: '0xa258C4606Ca8206D8aA700cE2143D7db854D168c',
  yvDAI: '0xdA816459F1AB5631232FE5e97a05BBBb94970c95',
  wETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  weWETH: '0x3c66B18F67CA6C1A71F829E2F6a0c987f97462d0',
  wewstETH: '0x60897720AA966452e8706e74296B018990aEc527',
  weDAI: '0x4169Df1B7820702f566cc10938DA51F6F597d264',
  wa2WETH: '0xc21F107933612eCF5677894d45fc060767479A9b',
  wa2DAI: '0xbcb91e0B4Ad56b0d41e0C168E3090361c0039abC',
} as const;

type KnownAssetAddressKey = keyof typeof KNOWN_MAINNET_ASSET_ADDRESS_STRS;
export type KnownAssetAddressString = typeof KNOWN_MAINNET_ASSET_ADDRESS_STRS[KnownAssetAddressKey];

const addressStrs: string[] = Object.values(KNOWN_MAINNET_ASSET_ADDRESS_STRS);
export function isKnownAssetAddressString(addressStr?: string): addressStr is KnownAssetAddressString {
  if (!addressStr) return false;
  return addressStrs.includes(addressStr);
}

export const KNOWN_MAINNET_ASSET_ADDRESSES = mapObj(KNOWN_MAINNET_ASSET_ADDRESS_STRS, EthAddress.fromString);

const ADDR = KNOWN_MAINNET_ASSET_ADDRESSES;
export const SHIELDABLE_ASSET_ADDRESSES = [ADDR.ETH, ADDR.DAI];