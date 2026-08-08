
<br/>

如果你已经安装了[Python](https://www.python.org/downloads)，那么你可以直接使用自带的http.server工具

## 使用Python

在资源管理器中找到幻想纹章4本地版的`resources\app`目录（你可以这里面看见`index.html`和`HxwzHaxe.js`）。在该目录下打开CMD或者PowerShell，运行：

```PowerShell
python -m http.server 8000
```

成功后，**不要关闭窗口**，前往你的本地浏览器访问 http://localhost:8000 即可

命令中的`.`表示当前目录下，当然你也可以自己指定端口和目录，此时无需在幻想纹章4本地版的`resources\app`目录下运行，但是用于替代`.`的路径需要**填写正确**，访问地址的端口也会相应改变：

```PowerShell
python 3 python -m http.server 11451 -d D:\幻想纹章4v0.9.9.64-win32-ia32\resources\app
```
