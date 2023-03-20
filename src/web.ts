import { WebPlugin } from '@capacitor/core';

import type { ScreenshotEventPlugin } from './definitions';

export class ScreenshotEventWeb extends WebPlugin implements ScreenshotEventPlugin {
  async startWatchEvent(): Promise<void> {
    console.log('startWatchEvent');
  }

  async removeWatchEvent(): Promise<void> {
    console.log('removeWatchEvent');
  }
}
