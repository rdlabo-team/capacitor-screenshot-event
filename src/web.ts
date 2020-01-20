import { WebPlugin } from '@capacitor/core';
import { ScreenshotEventPlugin } from './definitions';

export class ScreenshotEventWeb extends WebPlugin implements ScreenshotEventPlugin {
  constructor() {
    super({
      name: 'ScreenshotEvent',
      platforms: ['web']
    });
  }

  async startWatchEvent(): Promise<{value: boolean}> {
    return { value: true};
  }

  async removeWatchEvent(): Promise<{value: boolean}> {
    return { value: true};
  }
}

const ScreenshotEvent = new ScreenshotEventWeb();

export { ScreenshotEvent };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(ScreenshotEvent);
