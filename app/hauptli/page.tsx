import Link from "next/link";

const resources = [
  {
    title: "Case Study",
    href: "https://docs.google.com/document/d/1fbzroKMYjMusp3V-XcHOaM5iGW8O8G9J9cpLVNFWy6Y/edit?usp=sharing",
    embedSrc:
      "https://docs.google.com/document/d/1fbzroKMYjMusp3V-XcHOaM5iGW8O8G9J9cpLVNFWy6Y/preview",
    type: "doc",
  },
  {
    title: "Reflective Paper",
    href: "https://docs.google.com/document/d/1h3htP8owFfb8bDfF5JbhizE5_ARRTC4DkDo2onR8cXs/edit?usp=sharing",
    embedSrc:
      "https://docs.google.com/document/d/1h3htP8owFfb8bDfF5JbhizE5_ARRTC4DkDo2onR8cXs/preview",
    type: "doc",
  },
  {
    title: "Case Study Analysis",
    href: "https://docs.google.com/presentation/d/1xshc7azfleHWJL_xRQqBAqHUbsp1q4gTBwhNGMhvHM8/edit?usp=sharing",
    embedSrc:
      "https://docs.google.com/presentation/d/1xshc7azfleHWJL_xRQqBAqHUbsp1q4gTBwhNGMhvHM8/embed?start=false&loop=false&delayms=3000",
    type: "slide",
  },
  {
    title: "Virtual Field Experience",
    href: "https://docs.google.com/spreadsheets/d/1G7PN_vvTkwt4LlrLfWy-80N5jsjsSwuhkFGgiTzd8A0/edit?usp=sharing",
    embedSrc:
      "https://docs.google.com/spreadsheets/d/1G7PN_vvTkwt4LlrLfWy-80N5jsjsSwuhkFGgiTzd8A0/preview",
    type: "sheet",
  },
] as const;

export default function HauptliPage() {
  return (
    <main className="min-h-screen bg-gray-900 px-4 py-8 text-gray-100 md:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <header className="space-y-2">
          <Link
            href="/"
            className="inline-block rounded-md border border-gray-600 bg-gray-800 px-3 py-1.5 text-sm font-semibold text-gray-100 transition hover:bg-gray-700"
          >
            Back to Main Page
          </Link>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Prof Hauptli EDU230
          </h1>
          <p className="text-sm text-gray-300 md:text-base">
            Quick access to Google resources.
          </p>
        </header>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {resources.map((resource) => (
            <article
              key={resource.title}
              className="overflow-hidden rounded-xl border border-gray-700 bg-gray-800/60 shadow-lg"
            >
              <a
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border-b border-gray-700 bg-gray-800 px-4 py-3 text-sm font-semibold text-gray-100 transition hover:bg-gray-700"
              >
                <span>{resource.title}</span>
                <span className="text-xs font-medium text-cyan-300">Open</span>
              </a>

              <div className="h-[300px] md:h-[340px]">
                <iframe
                  src={resource.embedSrc}
                  title={resource.title}
                  className="h-full w-full border-0"
                  loading="lazy"
                  scrolling="yes"
                  allowFullScreen
                />
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
