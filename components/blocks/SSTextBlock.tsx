

// export default function SSTextBlock({ block }: { block: any }) {
//   return (
//     <section>
//       <h2>{block.Heading}</h2>
//       <div dangerouslySetInnerHTML={{ __html: block.Body?.html }} />
//     </section>
//   );
// }



type SSTextBlockProps = {
  Heading?: string | null;
  Body?: {
    html?: string | null;
  } | null;
  isFirst?: boolean;
  preview?: boolean;
};

export default function SSTextBlock({
  Heading,
  Body
}: SSTextBlockProps) {
  return (
    <section>
      {Heading && <h2>{Heading}</h2>}

      {Body?.html && (
        <div dangerouslySetInnerHTML={{ __html: Body.html }} />
      )}
    </section>
  );
}
