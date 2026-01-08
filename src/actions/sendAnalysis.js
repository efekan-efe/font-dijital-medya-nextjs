"use server";

import { Resend } from "resend";

export async function sendAnalysis(formData) {
  // API Key'i fonksiyon içinde çağırıyoruz (Garanti olsun diye)
  const resend = new Resend(process.env.RESEND_API_KEY);

  const website = formData.get("websitesi");
  const email = formData.get("eposta_adresi");

  if (!website || !email) {
    return { success: false, message: "Lütfen tüm alanları doldurun." };
  }

  try {
    await resend.emails.send({
      // Domain doğrulaması yapılmadığı için 'from' kısmı böyle kalmalı
      from: "Analiz Talebi <onboarding@resend.dev>",

      // DEĞİŞEN KISIM: Senin Resend hesap mailin
      to: "adanadijitalmedya@gmail.com",

      subject: "🚀 Yeni Ücretsiz Analiz Talebi!",
      html: `
        <h2>Yeni Bir Potansiyel Müşteri Var!</h2>
        <p><strong>Web Sitesi:</strong> ${website}</p>
        <p><strong>E-posta:</strong> ${email}</p>
      `,
    });

    return { success: true, message: "Analiz talebiniz başarıyla alındı!" };
  } catch (error) {
    console.error("Mail Gönderme Hatası:", error);
    return { success: false, message: "Bir hata oluştu, lütfen tekrar deneyin." };
  }
}
