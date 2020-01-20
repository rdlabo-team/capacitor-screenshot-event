package jp.rdlabo.capacitor.plugin.screenshotevent;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

@NativePlugin()
public class ScreenshotEvent extends Plugin {

    @PluginMethod()
    public void startWatchEvent(PluginCall call) {
        call.success(new JSObject().put("value", true));
    }

    @PluginMethod()
    public void removeWatchEvent(PluginCall call) {
        call.success(new JSObject().put("value", true));
    }
}
