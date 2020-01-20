declare module "@capacitor/core" {
  interface PluginRegistry {
    ScreenshotEvent: ScreenshotEventPlugin;
  }
}

export interface ScreenshotEventPlugin {
  startWatchEvent(): Promise<{value: boolean}>;
  removeWatchEvent(): Promise<{value: boolean}>;
}
