type Props = {
  title: string;
  intro: string;
};

export function PageHeader({ title, intro }: Props) {
  return (
    <section className="page-hero">
      <div className="page-intro">
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
    </section>
  );
}
