---
id: golang-json-unmarshal-field-with-dynamic-type
title: golang 解析可变类型 json 字段
tags: [golang]
---


在接入一些php后台时，可能会遇到返回的json字段类型变化的情况(即字段类型不规范的情况)。
这时候可以选择简单的用`interface`去解析。
当然，还可以使用`json.RawMessage`来应对更复杂的情况。

```json
{
  "code": 0,
  "data": "xxx",
  "error": []
}
```

```json
{
  "code": -3031,
  "data": "xxx",
  "error": {
    "code": -3031,
    "msg": "密码错误"
  }
}
```

这里`error`字段其实是可以根据外部`code`是否为*0*来判断类型的。

还有一种办法是对`error`这个struct定义一个`Unmarshal`方法。

```go
type Error interface{}

func (e Error) Unmarshal() {
}
```
