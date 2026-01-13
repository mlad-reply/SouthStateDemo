export const dynamic = "force-dynamic";

import { Suspense } from 'react';
import { optimizely } from '@/lib/optimizely/fetch'
import  ContentAreaMapper  from '@/components/content-area/mapper';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';


export default async function HomePage() {
  const result = await optimizely.GetHomePage();

  const startPage = result.data?.Page?.items?.[1];

   const blocks = (startPage?.Blocks ?? []).filter(
    (block) => block !== null && block !== undefined
  )

  if (!startPage) {
    return <div>No page found</div>;
  }
console.log(
  "BLOCK ORDER FROM GRAPHQL:",
  startPage?.Blocks?.map((b) => b?.__typename)
);

  return (
   <div className="min-h-screen bg-white">
      <Header />

      <main>
        <Suspense fallback={<div>Loading content…</div>}>
          <ContentAreaMapper blocks={blocks} />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
