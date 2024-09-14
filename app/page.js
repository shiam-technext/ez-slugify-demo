import SlugGenerator from "@/components/SlugGenerator";

export default function Home() {
  return (
    <>
      <main className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="mb-8 font-lato text-4xl font-bold text-center">
          Convert Your String to a SEO-Friendly Slug
        </h1>

        <SlugGenerator />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </>
  );
}
