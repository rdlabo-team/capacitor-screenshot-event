export interface ScreenshotEventPlugin {
  startWatchEvent(): Promise<void>;
  removeWatchEvent(): Promise<void>;
}
