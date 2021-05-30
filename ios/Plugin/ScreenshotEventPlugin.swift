import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(ScreenshotEventPlugin)
public class ScreenshotEventPlugin: CAPPlugin {
    @objc func startWatchEvent(_ call: CAPPluginCall) {
        NotificationCenter.default.addObserver(
            self,
            selector: #selector(self.didTakeScreenshot(notification:)),
            name: UIApplication.userDidTakeScreenshotNotification,
            object: nil)
        call.resolve()
    }

    @objc func removeWatchEvent(_ call: CAPPluginCall) {
        NotificationCenter.default.removeObserver(self)
        call.resolve()
    }

    @objc func didTakeScreenshot(notification: Notification) {
        NSLog("userDidTakeScreenshot")
        self.notifyListeners("userDidTakeScreenshot", data: [:])
    }
}
