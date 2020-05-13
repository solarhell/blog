---
id: golang-json-marshal-unsecape-html
title: golang json.Marshal 避免转义html
# author: Yangshun Tay
# author_title: Front End Engineer @ Facebook
# author_url: https://github.com/yangshun
# author_image_url: https://avatars0.githubusercontent.com/u/1315101?s=400&v=4
tags: [golang]
---


在对接微信客服消息的时候，发现换行符、a标签等都被转义了。
调查发现是在对结构体调用`json.Marshal`发生的。

<!--truncate-->

[json.Marshal](https://pkg.go.dev/encoding/json?tab=doc#Marshal)

`String values encode as JSON strings coerced to valid UTF-8, replacing invalid bytes with the Unicode replacement rune. So that the JSON will be safe to embed inside HTML <script> tags, the string is encoded using HTMLEscape, which replaces "<", ">", "&", U+2028, and U+2029 are escaped to "\u003c","\u003e", "\u0026", "\u2028", and "\u2029". This replacement can be disabled when using an Encoder, by calling SetEscapeHTML(false).`

`json.Marshal` 默认 `escapeHtml` 为 true, 会转义 `&lt;`、`&gt;`、`&amp;`。

```go
func Marshal(v interface{}) ([]byte, error) {
    e := newEncodeState()

    err := e.marshal(v, encOpts{escapeHTML: true})
    if err != nil {
        return nil, err
    }
    buf := append([]byte(nil), e.Bytes()...)

    e.Reset()
    encodeStatePool.Put(e)

    return buf, nil
}
```

解决办法就是自定义一个`encoder`。

```go
bf := bytes.NewBuffer([]byte{})
jsonEncoder := json.NewEncoder(bf)
jsonEncoder.SetEscapeHTML(false)

err = jsonEncoder.Encode(msg)
if err != nil {
    ...
}

log.Println(bf.String())
```
