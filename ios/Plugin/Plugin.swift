import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitor.ionicframework.com/docs/plugins/ios
 */
@objc(ScreenshotEvent)
public class ScreenshotEvent: CAPPlugin {
    
    @objc func startWatchEvent(_ call: CAPPluginCall) {
        NotificationCenter.default.addObserver(
            self,
            selector: #selector(self.didTakeScreenshot(notification:)),
            name: UIApplication.userDidTakeScreenshotNotification,
            object: nil)
        call.success([
            "value": true
        ])
    }
    
    @objc func removeWatchEvent(_ call: CAPPluginCall) {
        NotificationCenter.default.removeObserver(self)
        call.success([
            "value": true
        ])
    }
    
    @objc func didTakeScreenshot(notification: Notification) {
        NSLog("userDidTakeScreenshot")
        self.notifyListeners("userDidTakeScreenshot", data: ["value": true])
    }
}
