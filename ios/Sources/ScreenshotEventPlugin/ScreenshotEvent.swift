import Foundation

@objc public class ScreenshotEvent: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
