## wxmarked

这是一个适用于微信小程序的Markdown文本解析器。

## 使用

将src目录下文件导入工程目录，接着只需在引用页面所在json文件中配置：

```json
{
  "usingComponents": {
    "wxmarked": "/page/to/wxmarked"
  }
}
```

此时在wxml即可使用:

```HTML
<wxmarked markdownText="## hi"></wxmarked>
```
