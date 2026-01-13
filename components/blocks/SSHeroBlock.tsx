import Image from "next/image";
import { Button } from "@/components/ui/button";

type SSHeroBlockProps = {
  Heading?: string;
  Description?: { html?: string };
  ImageURL?: { url?: { default?: string } };
  PrimaryButtonText?: string;
  PrimaryButtonLink?: { url?: { default?: string } };
  SecondaryButtonText?: string;
  SecondaryButtonLink?: { url?: { default?: string } };
};

export default function SSHeroBlock(props: SSHeroBlockProps) {
  const {
    Heading,
    Description,
    ImageURL,
    PrimaryButtonText,
    PrimaryButtonLink,
    SecondaryButtonText,
    SecondaryButtonLink
  } = props;

  return (
    <section className="relative bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
                  <div className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            {Heading && (
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
                {Heading}
              </h1>
            )}

            {Description?.html && (
              <div
                className="text-xl md:text-2xl mb-8 text-gray-800"
                dangerouslySetInnerHTML={{ __html: Description.html }}
              />
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              {PrimaryButtonText && PrimaryButtonLink?.url?.default && (
                <a
                  href={PrimaryButtonLink.url.default}
                  className="inline-flex items-center justify-center rounded-md px-6 py-3 text-lg font-medium
                            bg-gray-900 text-white hover:bg-gray-800 transition"
                >
                  {PrimaryButtonText}
                </a>
              )}

              {SecondaryButtonText && SecondaryButtonLink?.url?.default && (
                <a
                  href={SecondaryButtonLink.url.default}
                  className="inline-flex items-center justify-center rounded-md px-6 py-3 text-lg font-medium
                            border border-gray-900 text-gray-900 hover:bg-gray-900/10 transition"
                >
                  {SecondaryButtonText}
                </a>
              )}
            </div>
          </div>
          {/* Right Image */}
          <div className="relative h-[400px] lg:h-[600px]">
            {ImageURL?.url?.default && (
              <Image
                src={ImageURL.url.default}
                alt={Heading ?? ""}
                fill
                className="object-cover"
                priority
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
