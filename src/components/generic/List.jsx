function List({ data, keyExtractor, RenderEach }) {
  return (
    <>
      {data.map((item, index) => (
        <RenderEach
          key={keyExtractor ? keyExtractor(item) : index}
          item={item}
        />
      ))}
    </>
  );
}

export default List;
