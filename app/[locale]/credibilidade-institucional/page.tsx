import { LocaleParams, metadataForPage, renderStandardPage } from "@/lib/pageFactory";

export const generateMetadata = (props: LocaleParams) => metadataForPage(props, "credibilidade");
export default async function Page(props: LocaleParams) { return renderStandardPage(props, "credibilidade"); }
