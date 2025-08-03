import { NextIntlClientProvider, useMessages } from "next-intl";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  params: { locale: string };
}

const locales = ["en", "fa", "ar"];

export default function LocaleLayout({ children, params: { locale } }: Props) {

  if (!locales.includes(locale)) notFound();


  const isRTL = ["fa", "ar"].includes(locale);
  const direction = isRTL ? "rtl" : "ltr";

  // دریافت پیام‌ها
  const messages = useMessages();

  return (
    <html lang={locale} dir={direction}>
      <body style={{ direction }}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
