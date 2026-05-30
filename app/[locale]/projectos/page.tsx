import { redirect } from "next/navigation";
import { LocaleParams } from "@/lib/pageFactory";

export default async function Page({ params }: LocaleParams) {
  const { locale } = await params;
  redirect(`/${locale}/projectos-estrategicos`);
}
