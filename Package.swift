// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "RdlaboCapacitorScreenshotEvent",
    platforms: [.iOS(.v15)],
    products: [
        .library(
            name: "RdlaboCapacitorScreenshotEvent",
            targets: ["ScreenshotEventPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "8.0.0")
    ],
    targets: [
        .target(
            name: "ScreenshotEventPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/ScreenshotEventPlugin"),
        .testTarget(
            name: "ScreenshotEventPluginTests",
            dependencies: ["ScreenshotEventPlugin"],
            path: "ios/Tests/ScreenshotEventPluginTests")
    ]
)