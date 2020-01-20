package jp.rdlabo.capacitor.plugin.screenshotevent;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.util.HostMask;

import android.os.FileObserver;
import android.os.Environment;
import android.util.Log;

import java.io.File;

import java.util.ArrayList;
import java.util.List;
import java.util.Stack;


@NativePlugin()
public class ScreenshotEvent extends Plugin {
    private FileObserver observer;
    @PluginMethod()
    public void startWatchEvent(PluginCall call) {
        String path = Environment.getExternalStorageDirectory().toString()
                + File.separator + Environment.DIRECTORY_PICTURES
                + File.separator + "Screenshots" + File.separator;
        Log.d(getLogTag(), "ScreenshotEvent startWatchEvent: " + path);
        observer = new RecursiveFileObserver(path, 99) {
            @Override
            public void onEvent(int event, String file) {
                if(!file.equals(".probe")){
                    notifyListeners("userDidTakeScreenshot", new JSObject().put("value", true));
                }
            }
        };
        observer.startWatching();

        call.success(new JSObject().put("value", true));
    }

    @PluginMethod()
    public void removeWatchEvent(PluginCall call) {
        observer.stopWatching();
        call.success(new JSObject().put("value", true));
    }
}


class RecursiveFileObserver extends FileObserver {

    public static int CHANGES_ONLY = CLOSE_WRITE | MOVE_SELF | MOVED_FROM;

    List<SingleFileObserver> mObservers;
    String mPath;
    int mMask;

    public RecursiveFileObserver(String path) {
        this(path, ALL_EVENTS);
    }

    public RecursiveFileObserver(String path, int mask) {
        super(path, mask);
        mPath = path;
        mMask = mask;
    }

    @Override
    public void startWatching() {
        if (mObservers != null) return;
        mObservers = new ArrayList<SingleFileObserver>();
        Stack<String> stack = new Stack<String>();
        stack.push(mPath);

        while (!stack.empty()) {
            String parent = stack.pop();
            mObservers.add(new SingleFileObserver(parent, mMask));
            File path = new File(parent);
            File[] files = path.listFiles();
            if (files == null) continue;
            for (int i = 0; i < files.length; ++i) {
                if (files[i].isDirectory() && !files[i].getName().equals(".")
                        && !files[i].getName().equals("..")) {
                    stack.push(files[i].getPath());
                }
            }
        }
        for (int i = 0; i < mObservers.size(); i++)
            mObservers.get(i).startWatching();
    }

    @Override
    public void stopWatching() {
        if (mObservers == null) return;

        for (int i = 0; i < mObservers.size(); ++i)
            mObservers.get(i).stopWatching();

        mObservers.clear();
        mObservers = null;
    }

    @Override
    public void onEvent(int event, String path) {

    }

    private class SingleFileObserver extends FileObserver {
        private String mPath;

        public SingleFileObserver(String path, int mask) {
            super(path, mask);
            mPath = path;
        }

        @Override
        public void onEvent(int event, String path) {
            String newPath = mPath + "/" + path;
            RecursiveFileObserver.this.onEvent(event, newPath);
        }

    }
}
