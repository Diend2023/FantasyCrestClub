
<br/>

如果你既没有Node.js环境也没有Python环境，那么使用UV是最简单的方法

>UV是一个用 Rust 编写的极速 Python 包和项目管理工具。可以一个工具替代 pip、pip-tools、pipx、poetry、pyenv、twine、virtualenv 等。

## 安装UV

使用WinGet安装UV：

```CMD
winget install uv
```

或者使用官方安装脚本（PowerShell）：

```PowerShell
irm https://astral.sh/uv/install.ps1 | iex
```

安装完成后，可以**重新打开**新的cmd或者PowerShell窗口，使用以下命令验证是否安装成功：

```CMD
uv --version
```

## 使用UV

UV安装完成后，在资源管理器中找到幻想纹章4本地版的`resources\app`目录（你可以这里面看见`index.html`和`HxwzHaxe.js`）。在该目录下打开CMD或者PowerShell窗口，运行：

```PowerShell
uv run --python 3 python -m http.server 8000
```

成功后，**不要关闭窗口**，前往你的本地浏览器访问 http://localhost:8000 即可

当然你也可以自己指定端口和目录，此时无需在幻想纹章4本地版的`resources\app`目录下运行，但是`-d`之后的路径需要**填写正确**，访问地址的端口也会相应改变：

```PowerShell
uv run --python 3 python -m http.server 11451 -d D:\幻想纹章4v0.9.9.64-win32-ia32\resources\app
```
