# Android 开发环境搭建

如果要开发基于Ionic的Android应用，需要具备以下环境：


* Java
* Gradle
* Android Studio

其中，Java环境搭建，请参阅《Java 编程要点》（<https://github.com/waylau/essential-java>）; Gradle 环境搭建，请参阅《Gradle 2 用户指南》（<https://github.com/waylau/Gradle-2-User-Guide>）。

以下，主要介绍 Android Studio 的安装。

## 安装 Android Studio

下载地址为<https://developer.android.com/studio/>。

## 安装 Android SDK

![](https://ionicframework.com/docs/assets/img/installation/android-studio-sdk-setup.png)

## 设置环境变量


```
export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
Add the Android SDK command-line directories to PATH. Each directory corresponds to the category of command-line tool.

# avdmanager, sdkmanager
export PATH=$PATH:$ANDROID_SDK_ROOT/tools/bin

# adb, logcat
export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools

# emulator
export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
```

## 创建 Android Virtual Device

Android Virtual Devices (AVDs) 是 Android 模拟器。

## 常用命令

使用下面命令来构建应用：

```
ionic cordova build android
```

使用下面命令来运行应用：

```
ionic cordova run android
```

其他的命令还包括：

```
ionic cordova run android
ionic cordova run android --buildConfig=build.json
ionic cordova run android --prod --release -- -- --gradleArg=-PcdvBuildMultipleApks=true
ionic cordova run android --prod --release -- -- --keystore=filename.keystore --alias=myalias
ionic cordova run android --prod --release -- -- --minSdkVersion=21
ionic cordova run android --prod --release -- -- --versionCode=55
ionic cordova run android --prod --release --buildConfig=build.json
ionic cordova run android -l
ionic cordova run ios
ionic cordova run ios --buildConfig=build.json
ionic cordova run ios --livereload
ionic cordova run ios --livereload-url=http://localhost:8100
ionic cordova run ios --prod --release
ionic cordova run ios --prod --release -- --developmentTeam="ABCD" --codeSignIdentity="iPhone Developer" --packageType="app-store"
ionic cordova run ios --prod --release --buildConfig=build.json
```