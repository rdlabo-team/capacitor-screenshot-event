package jp.rdlabo.capacitor.plugin.screenshotevent;

import android.os.Environment;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "ScreenshotEvent")
public class ScreenshotEventPlugin extends Plugin {

    private static final String PATH = Environment.getExternalStorageDirectory().toString() + "/Pictures/Screenshots/";
    private ScreenshotEvent screenshotEvent = new ScreenshotEvent(PATH, this::notifyListeners);

    @PluginMethod
    public void startWatchEvent(PluginCall call) {
        screenshotEvent.startWatching();
        call.resolve();
    }

    @PluginMethod
    public void removeWatchEvent(PluginCall call) {
        screenshotEvent.stopWatching();
        call.resolve();
    }
}
