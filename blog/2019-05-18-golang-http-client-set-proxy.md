---
id: golang-http-client-set-proxy
title: golang http客户端使用http代理/socks代理
tags: [golang]
---


网上流传的用法大都引用了 `golang.org/x/net/proxy`（并且使用了已经 **deprecated** 的`dialer`)，实际上现在可以直接用这种更简单的写法。

<!--truncate-->

```go
package main

import (
    "fmt"
    "io/ioutil"
    "net/http"
    "net/url"
)

const (
    HttpProxy  = "http://127.0.0.1:6152"
    SocksProxy = "socks5://127.0.0.1:6153"
)

func main() {
    proxy := func(_ *http.Request) (*url.URL, error) {
        return url.Parse(HttpProxy)
    }

    httpTransport := &amp;http.Transport{
        Proxy: proxy,
    }

    httpClient := &amp;http.Client{
        Transport: httpTransport,
    }

    req, err := http.NewRequest("GET", "https://api.ip.sb/ip", nil)
    if err != nil {
        // handle error
    }

    resp, err := httpClient.Do(req)
    defer resp.Body.Close()

    body, err := ioutil.ReadAll(resp.Body)
    if err != nil {
        // handle error
    }

    fmt.Println(string(body))

    proxy = func(_ *http.Request) (*url.URL, error) {
        return url.Parse(SocksProxy)
    }

    httpTransport = &amp;http.Transport{
        Proxy: proxy,
    }

    httpClient = &amp;http.Client{
        Transport: httpTransport,
    }

    req, err = http.NewRequest("GET", "https://api.ip.sb/ip", nil)
    if err != nil {
        // handle error
    }

    resp, err = httpClient.Do(req)
    defer resp.Body.Close()

    body, err = ioutil.ReadAll(resp.Body)
    if err != nil {
        // handle error
    }

    fmt.Println(string(body))
}
```

可以验证：打印的响应中确实为代理IP。
