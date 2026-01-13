import Image from "next/image";
import { Button } from "@/components/ui/button";

type CTASectionBlockProps = {
  Heading?: string;
  Description?: { html?: string };
  BackgroundImage?: { default?: string };
  PrimaryButtonText?: string;
  PrimaryButtonLink?: { url?: { default?: string } };
  SecondaryButtonText?: string;
  SecondaryButtonLink?: { url?: { default?: string } };
};


export default function CTASectionBlock(props: CTASectionBlockProps) {
  const {
    Heading,
    Description,
    BackgroundImage,
    PrimaryButtonText,
    PrimaryButtonLink,
    SecondaryButtonText,
    SecondaryButtonLink
  } = props;

  return (
    <section className="relative overflow-hidden">
      {BackgroundImage?.default && (
        <div className="absolute inset-0 z-0">
          <Image
            src={BackgroundImage.default}
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-yellow-500/80" />
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <h2 className="text-3xl lg:text-4xl font-bold">
          {Heading}
        </h2>

        {Description?.html && (
          <div
            className="mt-4 max-w-2xl text-lg"
            dangerouslySetInnerHTML={{ __html: Description.html }}
          />
        )}

        <div className="mt-8 flex flex-wrap gap-4">
          {PrimaryButtonText && PrimaryButtonLink?.url?.default && (
            <a
              href={PrimaryButtonLink.url.default}
              className="rounded-md bg-gray-900 px-6 py-3 text-white font-semibold hover:bg-gray-800"
            >
              {PrimaryButtonText}
            </a>
          )}

          {SecondaryButtonText && SecondaryButtonLink?.url?.default && (
            <a
              href={SecondaryButtonLink.url.default}
              className="rounded-md border border-gray-900 px-6 py-3 font-semibold hover:bg-gray-900 hover:text-white"
            >
              {SecondaryButtonText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
