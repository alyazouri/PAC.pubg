function FindProxyForURL(url, host) {
  // السماح للمواقع الأردنية مباشرة
  if (dnsDomainIs(host, ".jo") || shExpMatch(host, "*.jo")) {
    return "DIRECT";
  }

  // السماح بخدمات PUBG المهمة مباشرة
  if (
    shExpMatch(host, "*.pubgmobile.com") ||
    shExpMatch(host, "*.igamecj.com") ||
    shExpMatch(host, "*.proximabeta.com") ||
    shExpMatch(host, "*.qos.game.qq.com") ||
    shExpMatch(host, "*.gpubgm.com") ||
    shExpMatch(host, "*.amazonaws.com")
  ) {
    return "DIRECT";
  }

  // باقي الإنترنت يفتح طبيعي (بدون حجب أو تأخير)
  return "DIRECT";
}
