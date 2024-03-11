export default function CoreConcept({ image, title, description }) {
  return (
    <li key={title}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

{
  /* <ul>
  {CORE_CONCEPTS.map(({ image, title, description }) => (
    <li key={title}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  ))}
</ul>; */
}
