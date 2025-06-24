function FindProxyForURL(url, host) {
  // 1. السماح الكامل للمواقع الأردنية
  if (
    dnsDomainIs(host, ".jo") ||
    shExpMatch(host, "*.jo")
  ) return "DIRECT";

  // 2. السماح بخدمات أردنية أو محلية مهمة
  if (
    shExpMatch(host, "*.orange.jo") ||
    shExpMatch(host, "*.umniah.com.jo") ||
    shExpMatch(host, "*.zain.jo")
  ) return "DIRECT";

  // 3. السماح فقط لبعض الخدمات الخارجية المحددة (مثل PUBG)
  if (
    shExpMatch(host, "*.pubgmobile.com") ||
    shExpMatch(host, "*.igamecj.com") ||
    shExpMatch(host, "*.proximabeta.com") ||
    shExpMatch(host, "*.qos.game.qq.com") ||
    shExpMatch(host, "*.gpubgm.com") ||
    shExpMatch(host, "*.amazonaws.com")
  ) return "DIRECT";

  // 4. أي موقع ثاني خارجي يتم حجبه
  return "PROXY 0.0.0.0:0";
}
