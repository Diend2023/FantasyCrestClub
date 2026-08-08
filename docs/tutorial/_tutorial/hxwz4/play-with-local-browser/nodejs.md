
<br/>

如果你已经安装了[Node.js](https://nodejs.org/zh-cn/download)，那么你可以直接使用自带的npx工具

## 使用Node.js

在资源管理器中找到幻想纹章4本地版的`resources\app`目录（你可以这里面看见`index.html`和`HxwzHaxe.js`）。在该目录下打开CMD或者PowerShell，运行：

```PowerShell
npx http-server . -p 8000 -o
```

或者：

```PowerShell
npx serve . -l 8000
```

:::tip 提示

使用serve时，可能会遇到询问你是否安装的情况，此时需要你手动输入`y`，然后回车确认。

```PowerShell
Need to install the following packages:
serve@14.2.6
Ok to proceed? (y)
```

:::

成功后，**不要关闭窗口**，前往你的本地浏览器访问 http://localhost:8000 即可

命令中的`.`表示当前目录下，当然你也可以自己指定端口和目录，此时无需在幻想纹章4本地版的`resources\app`目录下运行，但是用于替代`.`的路径需要**填写正确**，访问地址的端口也会相应改变：

```PowerShell
npx http-server D:\幻想纹章4v0.9.9.64-win32-ia32\resources\app -p 11451 -o
```

或者：

```PowerShell
npx serve D:\幻想纹章4v0.9.9.64-win32-ia32\resources\app -l 11451
```
