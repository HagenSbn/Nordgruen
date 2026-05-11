import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import StandortContent from "@/components/sections/StandortContent";
import { standorte, getStandortBySlug } from "@/app/standorte/data";

export function generateStaticParams() {
  return standorte.map((s) => ({ stadt: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ stadt: string }>;
}): Promise<Metadata> {
  const { stadt } = await params;
  const data = getStandortBySlug(stadt);
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `/standorte/${stadt}` },
  };
}

export default async function StadtPage({
  params,
}: {
  params: Promise<{ stadt: string }>;
}) {
  const { stadt } = await params;
  const data = getStandortBySlug(stadt);
  if (!data) notFound();

  return (
    <>
      <Navbar />
      <StandortContent data={data} />
      <Footer />
    </>
  );
}
