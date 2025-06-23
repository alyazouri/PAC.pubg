function FindProxyForURL(url, host) {
  var pubg_domains = [
    "*.tencent.com",
    "*.igamecj.com",
    "*.pubgmobile.com",
    "*.pubgmobile.kr",
    "*.pubgmobile.live",
    "*.qcloud.com",
    "*.gcloudcs.com",
    "*.facegamenetwork.com",
    "*.gamingbuddy.cn",
    "*.gameasea.com",
    "*.gpspeed.cloud.tencent.com",
    "*.sandbox.google.com"
  ];

  for (var i = 0; i < pubg_domains.length; i++) {
    if (shExpMatch(host, pubg_domains[i])) {
      return "SOCKS5 192.168.8.129:80";
    }
  }

  return "DIRECT";
}
