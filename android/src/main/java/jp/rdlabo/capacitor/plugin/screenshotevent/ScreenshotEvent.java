package jp.rdlabo.capacitor.plugin.screenshotevent;

import android.os.FileObserver;
import android.util.Log;
import com.getcapacitor.JSObject;
import com.google.android.gms.common.util.BiConsumer;

public class ScreenshotEvent extends FileObserver {
    protected BiConsumer<String, JSObject> notifyListenersFunction;
    private final JSObject emptyObject = new JSObject();

    public ScreenshotEvent(
        String filepath,
        BiConsumer<String, JSObject> notifyListenersFunction
    ) {
        super(filepath);
        this.notifyListenersFunction = notifyListenersFunction;
    }

    protected void notifyListeners(String eventName, JSObject data) {
        notifyListenersFunction.accept(eventName, data);
    }

    @Override
    public void startWatching() {
        super.startWatching();
    }

    // 監視を終了したいときは、このメソッドを呼ぶ
    @Override
    public void stopWatching() {
        super.stopWatching();
    }

    @Override
    public void onEvent(int event, String path) {
        if (event == FileObserver.CREATE) {
            this.notifyListeners("userDidTakeScreenshot", emptyObject);
            Log.i("========", "Event:" + event + "\t" + path);
        }
    }
}
