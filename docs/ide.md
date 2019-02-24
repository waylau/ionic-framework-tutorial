# Ionic 开发环境搭建

在开始工作之前，你必须设置好开发环境。

## 安装 Node.js 和 npm


如果你的电脑里没有 Node.js 和 npm，请安装它们。

Node.js 下载地址：<https://nodejs.org/en/download/> 


Node.js 最新版本为 11.10.0（包含了 npm 6.7.0）。为了能够享受最新的 Ionic 开发所带来的乐趣，请安装最新版本的 Node.js 和 npm。


安装完成之后，请先在终端/控制台窗口中运行命令 `node -v` 和 `npm -v`， 来验证一下安装是否正确。

```
$ node -v
v11.10.0

$ npm -v
6.7.0
```

## 安装Ionic CLI

Ionic 应用程序主要通过Ionic命令行实用程序创建和开发。 Ionic CLI是首选的安装方法，因为它提供了广泛的开发工具和帮助选项。它也是运行应用程序并将其连接到其他服务（如Ionic Appflow）的主要工具。


使用npm全局安装Ionic CLI：

```
$ npm install -g ionic
```

`-g`表示它是全局安装。对于Window，建议打开Admin命令提示符。 对于Mac/Linux，请使用sudo运行命令。


安装完成之后，可以在命令行输入ionic来进行验证：


```
$ ionic

   _             _
  (_) ___  _ __ (_) ___
  | |/ _ \| '_ \| |/ __|
  | | (_) | | | | | (__
  |_|\___/|_| |_|_|\___|  CLI 4.10.3


  Usage:

    $ ionic <command> [<args>] [--help] [--verbose] [--quiet] [--no-interactive] [--no-color] [--confirm] [options]

  Global Commands:

    config <subcommand> ............. Manage CLI and project config values (subcommands: get, set, unset)
    docs ............................ Open the Ionic documentation website
    info ............................ Print project, system, and environment information
    init ............................ (beta) Initialize existing projects with Ionic
    login ........................... Login to Ionic Appflow
    logout .......................... Logout of Ionic Appflow
    signup .......................... Create an account for Ionic Appflow
    ssh <subcommand> ................ Commands for configuring SSH keys (subcommands: add, delete, generate, list,
                                      setup, use)
    start ........................... Create a new project

  Project Commands:

    You are not in a project directory.
```


看到上述输出内容，证明Ionic CLI 安装完成了。