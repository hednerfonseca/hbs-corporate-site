type Props = {
  title: string;
  summary: string;
  points: string[];
};

export function ServiceCard({ title, summary, points }: Props) {
  return (
    <article className="service-card">
      <h3>{title}</h3>
      <p>{summary}</p>
      <ul>
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </article>
  );
}
