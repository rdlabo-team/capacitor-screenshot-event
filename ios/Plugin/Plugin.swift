import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitor.ionicframework.com/docs/plugins/ios
 */
@objc(ScreenshotEvent)
public class ScreenshotEvent: CAPPlugin {
    
    @objc func startWatchEvent(_ call: CAPPluginCall) {
        DispatchQueue.main.async {
            NotificationCenter.default.addObserver(self, selector: #selector(self.userDidTakeScreenshot(_:)), name: .UIApplicationUserDidTakeScreenshot, object: nil)
            call.success([
                "value": value
            ])
        }
    }
    
    @objc func removeWatchEvent(_ call: CAPPluginCall) {
        DispatchQueue.main.async {
            NotificationCenter.default.removeObserver(self)
            call.success([
                "value": value
            ])
        }
    }
    
    private func userDidTakeScreenshot(notification: Notification) {
        NSLog("userDidTakeScreenshot")
        self.notifyListeners("userDidTakeScreenshot", data: ["value": true])
    }
}
