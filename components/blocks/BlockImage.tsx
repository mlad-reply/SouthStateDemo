export default function BlockImage({ block }: { block: any }) {
  return (
    <section>
      <div dangerouslySetInnerHTML={{ __html: block._json }} />
    </section>
  );
}
