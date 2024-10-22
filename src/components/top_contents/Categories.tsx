import categoryImage from "./category-image-sample.svg";  //仮置き
import './Categories.css'

type CategoriesList = {
    name: string; // 名前
    image?: string; //  urlとして扱う場合string
}

const Categories = () => {

    const categoriesList: CategoriesList[] = [
      // TODO: いずれDBから取得するようにする
        { name: 'カテゴリ1', image: categoryImage },
        { name: 'カテゴリ2', image: categoryImage },
        { name: 'カテゴリ3', image: categoryImage },
        { name: 'カテゴリ4', image: categoryImage },
        { name: 'カテゴリ5', image: categoryImage },
        { name: 'カテゴリ6', image: categoryImage },
    ];

    return (
        <>
        <div>
          <ul className="container">
            {categoriesList.map(category => (
                <div key={category.name}>
                  <li>
                    <img src={category.image} alt="カテゴリイメージ" />
                    <span>{category.name}</span>
                  </li>
                </div>
            ))}
          </ul>
        </div>
        </>
    );
};

export default Categories;
