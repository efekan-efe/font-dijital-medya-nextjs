"use server";

import { Resend } from "resend";

export async function sendContact(formData) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const nameSurname = formData.get("nameSurname");
  const phoneNumber = formData.get("phoneNumber");
  const emailAddress = formData.get("emailAddress");
  const message = formData.get("message");

  // Basit doğrulama
  if (!nameSurname || !emailAddress || !message) {
    return {
      success: false,
      message: "Lütfen zorunlu alanları doldurunuz.",
    };
  }

  try {
    const data = await resend.emails.send({
      from: "Font İletişim Formu <onboarding@resend.dev>", // Domain onaylıysa: iletisim@fontdijitalmedya.com
      to: "adanadijitalmedya@gmail.com", // Senin e-posta adresin
      subject: `Yeni İletişim Mesajı: ${nameSurname}`,
      html: `
        <h3>Yeni bir iletişim formu mesajı aldınız!</h3>
        <p><strong>Ad Soyad:</strong> ${nameSurname}</p>
        <p><strong>Telefon:</strong> ${phoneNumber}</p>
        <p><strong>E-posta:</strong> ${emailAddress}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message}</p>
      `,
    });

    return { success: true, message: "Mesajınız başarıyla gönderildi!" };
  } catch (error) {
    return {
      success: false,
      message: "Bir hata oluştu, lütfen daha sonra tekrar deneyiniz.",
    };
  }
}
