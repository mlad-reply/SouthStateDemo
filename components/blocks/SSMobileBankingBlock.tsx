import Image from "next/image";
import { Bell, Lock, DollarSign } from "lucide-react";

type Props = {
  Heading?: string;
  Description?: { html?: string };
  Image?: { url?: { default?: string } };

  Feature1Title?: string;
  Feature1Description?: { html?: string };
  Feature2Title?: string;
  Feature3Title?: string;
  Feature4Title?: string;

  CTAText?: string;
  CTALink?: { url?: { default?: string } };
};

export default function SSMobileBankingBlock(props: Props) {
  const {
    Heading,
    Description,
    Image: ImageProp,
    Feature1Title,
    Feature1Description,
    Feature2Title,
    Feature3Title,
    Feature4Title,
    CTAText,
    CTALink
  } = props;

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {Heading && (
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-900">
              {Heading}
            </h2>
          )}

          {Description?.html && (
            <div
              className="mt-4 text-lg text-gray-600"
              dangerouslySetInnerHTML={{ __html: Description.html }}
            />
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          {ImageProp?.url?.default && (
            <div className="relative flex justify-center">
              <div className="relative w-[260px] h-[520px]">
                <Image
                  src={ImageProp.url.default}
                  alt=""
                  fill
                  className="object-contain drop-shadow-xl"
                />

                {/* Decorative icons */}
                <div className="absolute -right-10 top-24 bg-yellow-400 p-4 rounded-full shadow-lg">
                  <Bell className="h-6 w-6 text-blue-900" />
                </div>

                <div className="absolute -left-10 top-40 bg-yellow-400 p-4 rounded-full shadow-lg">
                  <DollarSign className="h-6 w-6 text-blue-900" />

                </div>

                <div className="absolute right-4 top-10 bg-yellow-400 p-3 rounded-full shadow-lg">
                  <Lock className="h-5 w-5 text-blue-900" />
                </div>
              </div>
            </div>
          )}

          {/* Features */}
          <div className="border-l-2 border-blue-900 pl-8 space-y-8">
            {Feature1Title && (
              <div>
                <h3 className="text-xl font-semibold text-blue-900">
                  {Feature1Title}
                </h3>

                {Feature1Description?.html && (
                  <div
                    className="mt-2 text-gray-600"
                    dangerouslySetInnerHTML={{
                      __html: Feature1Description.html
                    }}
                  />
                )}
              </div>
            )}

            {Feature2Title && (
              <h3 className="text-xl font-semibold text-gray-400">
                {Feature2Title}
              </h3>
            )}

            {Feature3Title && (
              <h3 className="text-xl font-semibold text-gray-400">
                {Feature3Title}
              </h3>
            )}

            {Feature4Title && (
              <h3 className="text-xl font-semibold text-gray-400">
                {Feature4Title}
              </h3>
            )}

            {CTAText && CTALink?.url?.default && (
              <div className="pt-6">
                <a
                  href={CTALink.url.default}
                  className="inline-block text-sm font-semibold tracking-wide text-blue-900 uppercase border-b-2 border-yellow-400 hover:border-blue-900 transition"
                >
                  {CTAText}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
