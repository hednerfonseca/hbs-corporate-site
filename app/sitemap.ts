import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";

const routes = ["", "/sobre", "/servicos", "/projectos-estrategicos", "/matu-garandi", "/ecossistema-horonho", "/centro-financeiro-hbs", "/assuntos-institucionais", "/parcerias", "/contacto", "/privacidade", "/termos"];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://horonho.com";

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.7
    }))
  );
}
