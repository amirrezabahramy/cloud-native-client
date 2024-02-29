import AsyncComponent from "./AsyncComponent";
import LegacyCentered from "./LegacyCentered";

function DataList({
  isLoading,
  isError,
  error,
  data,
  keyExtractor,
  RenderEach,
}) {
  return (
    <AsyncComponent isLoading={isLoading} isError={isError} error={error}>
      {data ? (
        data.length ? (
          data.map((item, index) => (
            <RenderEach
              key={keyExtractor ? keyExtractor(item) : item._id || index}
              item={item}
            />
          ))
        ) : (
          <LegacyCentered>
            <p className="font-irbold">موردی برای نمایش وجود ندارد.</p>
          </LegacyCentered>
        )
      ) : null}
    </AsyncComponent>
  );
}

export default DataList;
