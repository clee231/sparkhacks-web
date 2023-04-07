function ExampleComponent() {
  const items = ["Spark", "Hacks"];
  return (
    <ul>
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
}

export default ExampleComponent;
