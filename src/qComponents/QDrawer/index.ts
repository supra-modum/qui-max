import { getCurrentInstance } from 'vue';

import { createDrawer } from './src';
import type { QDrawer, QDrawerHookOptions } from './src/types';

const useDrawer = (options?: QDrawerHookOptions): QDrawer => {
  const parentInstance = getCurrentInstance();

  const drawer = createDrawer({
    parentInstance,
    ...options
  });

  return drawer;
};

export { useDrawer };
export { QDrawerContent } from './src/QDrawerContent';
export type {
  QDrawerContainerProps,
  QDrawerContainerProvider
} from './src/QDrawerContainer';
export { QDrawerAction } from './src/constants';
export type { QDrawer, QDrawerOptions } from './src/types';
