export default function CategorySelector({ data, onChangeCaracter }) {
  return (
    <>
      <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3">
        {data.map((item) => (
          <div
            key={item}
            className="cursor-pointer rounded-xl border-solid border-2 shadow-lg m-8 border-pink-500 bg-white"
            onClick={() => onChangeCaracter(item)}
          >
            <h4>{item}</h4>
          </div>
        ))}
      </div>
    </>
  );
}
