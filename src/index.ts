import { registerPlugin } from '@capacitor/core';

import type { ScreenshotEventPlugin } from './definitions';

const ScreenshotEvent = registerPlugin<ScreenshotEventPlugin>(
  'ScreenshotEvent',
  {
    web: () => import('./web').then(m => new m.ScreenshotEventWeb()),
  },
);

export * from './definitions';
export { ScreenshotEvent };
