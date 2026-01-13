import Image from "next/image";
import { Button } from "@/components/ui/button";

import {
  Lock,
  Headphones,
  MapPin,
  Smartphone
} from 'lucide-react';

type SSFeaturesProps = {
  Heading?: string;
  descriptionText?: string;

  Feature1Title?: string;
  Feature1Description?: string;
  Feature1Icon?: string;

  Feature2Title?: string;
  Feature2Description?: string;
  Feature2Icon?: string;

  Feature3Title?: string;
  Feature3Description?: string;
  Feature3Icon?: string;

  Feature4Title?: string;
  Feature4Description?: string;
  Feature4Icon?: string;
};

/**
 * Icon mapping from CMS string → React component
 */
const ICON_MAP: Record<string, React.ElementType> = {
  lock: Lock,
  headphones: Headphones,
  'map-pin': MapPin,
  smartphone: Smartphone
};

export default function SSFeatures(block: SSFeaturesProps) {
  if (!block?.Heading) return null;

  const features = [
    {
      title: block.Feature1Title,
      description: block.Feature1Description,
      icon: block.Feature1Icon
    },
    {
      title: block.Feature2Title,
      description: block.Feature2Description,
      icon: block.Feature2Icon
    },
    {
      title: block.Feature3Title,
      description: block.Feature3Description,
      icon: block.Feature3Icon
    },
    {
      title: block.Feature4Title,
      description: block.Feature4Description,
      icon: block.Feature4Icon
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-gray-900">
            {block.Heading}
          </h2>

          {block.descriptionText && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {block.descriptionText}
            </p>
          )}
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            if (!feature.title) return null;

            const Icon =
              feature.icon && ICON_MAP[feature.icon]
                ? ICON_MAP[feature.icon]
                : null;

            return (
              <div key={index} className="text-center">
                {Icon && (
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-gray-900" />
                  </div>
                )}

                <h3 className="text-xl mb-2 text-gray-900">
                  {feature.title}
                </h3>

                {feature.description && (
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
