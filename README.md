# Fitness GYM

Bir spor salonu için hazırlanmış, iki dilli (Türkçe / İngilizce), tamamen responsive tek sayfalık web sitesi tasarımı.

> **Not:** Bu proje bir tasarım / demo çalışmasıdır. Fiyatlar, antrenörler, ders programı ve iletişim bilgileri örnek içeriktir. Herhangi bir backend bağlı değildir; formlar doğrulama yapar ve başarı mesajı gösterir ancak hiçbir veri kaydedilmez veya gönderilmez.

## Özellikler

- **İki dil desteği** — Menüdeki EN / TR seçiciyle tüm site anında çevrilir. İlk açılışta tarayıcı dili algılanır, seçim tarayıcıda hatırlanır.
- **Bölümler** — Ana sayfa, koç uzmanlıkları (programlar), hakkımızda, antrenör ekibi, haftalık ders programı, üyelik paketleri, VKİ hesaplayıcı, üye yorumları, sıkça sorulan sorular, blog, iletişim (harita + form), kayıt formu.
- **Haftalık ders programı** — Gün sekmeleriyle grup dersleri; saat, seviye, antrenör ve süre bilgisi. Sayfa açıldığında bugünün programı gösterilir.
- **VKİ (BMI) hesaplayıcı** — Sonucu renkli ölçek üzerinde gösterir ve uygun programı önerir.
- **Giriş penceresi** — Üye / Koç / Yönetici rol seçimli giriş ekranı.
- **Form doğrulama** — Ad soyad, e-posta, telefon, yaş (16+), şifre gücü ve şifre tekrarı kontrolü; hata mesajları seçili dilde.
- **Etkileşimler** — Paket veya programa tıklayınca kayıt formunda otomatik seçilir; menü kaydırdıkça aktif bölümü gösterir; bölümler kaydırırken animasyonla belirir.
- **Erişilebilirlik** — Form etiketleri, klavye ile gezinme, Esc ile pencere kapatma, "içeriğe geç" bağlantısı, azaltılmış hareket tercihine saygı.

## Kurulum

[Node.js](https://nodejs.org/) (18 veya üzeri) gerekir.

```bash
npm install
npm start
```

Site http://localhost:3000 adresinde açılır.

| Komut           | Açıklama                                       |
| --------------- | ---------------------------------------------- |
| `npm start`     | Geliştirme sunucusunu başlatır                 |
| `npm test`      | Testleri çalıştırır                            |
| `npm run build` | Yayına hazır dosyaları `build/` klasörüne üretir |

## İçeriği düzenleme

| Ne değişecek                                    | Dosya                                      |
| ----------------------------------------------- | ------------------------------------------ |
| Tüm metinler (TR ve EN)                         | [`src/i18n.js`](src/i18n.js)               |
| Fiyatlar, görseller, linkler, iletişim bilgileri | [`src/data.js`](src/data.js)               |
| Antrenörler ve ders programı                     | [`src/data.js`](src/data.js)               |
| Renkler ve yazı tipleri                          | [`src/index.css`](src/index.css) (`:root`) |
| Bölüm tasarımları                                | [`src/App.css`](src/App.css)               |

`i18n.js` içindeki listeler (programlar, antrenörler, paketler, yorumlar, blog yazıları) `data.js` içindeki listelerle **aynı sırada** olmalıdır.

## Proje yapısı

```
src/
├── components/        Her bölüm ayrı bir bileşen (Navbar, Hero, Programs, Plans, ...)
├── images/            Sitede kullanılan görseller
├── App.jsx            Bölümleri bir araya getirir
├── LanguageContext.jsx Dil seçimi
├── i18n.js            Türkçe ve İngilizce metinler
├── data.js            Görseller, fiyatlar, linkler
├── hooks.js           Form, aktif bölüm ve animasyon yardımcıları
└── api.js             Form gönderimi (şu an demo)
```

## Backend eklemek

Tüm formlar [`src/api.js`](src/api.js) içindeki `submitForm` fonksiyonundan geçer. Gerçek bir backend (Firebase, Azure vb.) bağlamak için yalnızca bu fonksiyonu değiştirmek ve formlardaki "Demo" notunu (`DemoNote` bileşeni) kaldırmak yeterlidir.

## Yayına alma

`npm run build` komutunun ürettiği `build/` klasörü herhangi bir statik barındırma servisine (Netlify, Vercel, GitHub Pages) yüklenebilir. Örneğin Netlify'da `build/` klasörünü [app.netlify.com/drop](https://app.netlify.com/drop) sayfasına sürükleyip bırakmak yeterlidir.

## Geliştirici

Zehra Altunok — Kocaeli Üniversitesi
