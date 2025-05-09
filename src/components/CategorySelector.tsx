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
      <div className="grid grid-flow-row-dense grid-cols-3 place-items-center justify-center">
        {categories.map((category) => (
          <div
            key={category.id}
            className="cursor-pointer rounded-xl shadow-lg m-8 
            bg-[rgb(255,255,225)]/50 border-none w-45 flex flex-col justify-center"
            onClick={() => onChangeCaracter(category.label)}
          >
            <h4 className="text-pink-500 text-xl">{category.label}</h4>
            <img
              src={`assets/${category.icon}`}
              className="h-20"
              style={{ filter: "hue-rotate(90deg)" }}
            ></img>
          </div>
        ))}
      </div>
    </>
  );
}
