
  Pod::Spec.new do |s|
    s.name = 'RdlaboCapacitorScreenshotEvent'
    s.version = '0.0.1'
    s.summary = 'Notification that user shot screenshot'
    s.license = 'MIT'
    s.homepage = 'git@github.com:rdlabo/capacitor-screenshot-event.git'
    s.author = 'Masahiko Sakakibara'
    s.source = { :git => 'git@github.com:rdlabo/capacitor-screenshot-event.git', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end