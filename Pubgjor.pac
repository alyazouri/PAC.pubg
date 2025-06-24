function FindProxyForURL(url, host) {
  // السماح بنطاقات PUBG Mobile
  if (
    dnsDomainIs(host, ".pubgmobile.com") ||
    shExpMatch(host, "*.amazonaws.com") ||
    shExpMatch(host, "*.igame.qq.com") ||
    shExpMatch(host, "*.pubgmobile.helpshift.com") ||
    shExpMatch(host, "*.tencentgames.helpshift.com") ||
    shExpMatch(host, "*.proximabeta.com") ||
    shExpMatch(host, "*.qos.game.qq.com") ||
    shExpMatch(host, "*.igamecj.com") ||
    shExpMatch(host, "*.gpubgm.com")
  ) {
    return "DIRECT";
  }

  // السماح بالنطاقات الأردنية المحلية
  if (
    dnsDomainIs(host, ".jo") ||
    shExpMatch(host, "*.jo") ||
    shExpMatch(host, "*.orange.jo") ||
    shExpMatch(host, "*.umniah.com.jo") ||
    shExpMatch(host, "*.zain.jo") ||
    shExpMatch(host, "*.moi.gov.jo") ||
    shExpMatch(host, "*.amman.jo")
  ) {
    return "DIRECT";
  }

  // كل شيء آخر محظور
  return "PROXY 0.0.0.0:0";
}
