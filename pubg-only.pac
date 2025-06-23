function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*.tencent.com") ||
      shExpMatch(host, "*.pubgmobile.*") ||
      shExpMatch(host, "203.*")) {
    return "SOCKS5 jordan-socks5-mobicle.wiringcloudflared.workers.dev:1080; DIRECT";
  }
  return "DIRECT";
}
