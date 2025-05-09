import { Category } from "../models/Category";

export default function CategorySelector({
  categories,
  onChangeCaracter,
}: {
  categories: Array<Category>;
  onChangeCaracter: any;
}) {
  return (
    <>
      <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3">
        {categories.map((category) => (
          <div
            key={category.id}
            className="cursor-pointer rounded-xl border-solid border-2 shadow-lg m-8 border-pink-500 bg-white"
            onClick={() => onChangeCaracter(category.label)}
          >
            <h4>{category.label}</h4>
          </div>
        ))}
      </div>
    </>
  );
}
