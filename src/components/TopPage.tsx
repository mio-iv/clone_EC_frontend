import Footer from "./Footer";
import './top.css'
import Categories from "./top_contents/Categories";
import Slide from "./Slide";
import ahiruPng from "./top_contents/ahiru.png";    //仮置き（後日DBから出力できるようにする）
import ProductCarousel from "./top_contents/ProductCarousel";
ProductCarousel
const Top = () => {


    return (
        <div>
            {/*  className="box" */}
            {/* コンテンツ */}
            <Slide/>
            <ProductCarousel/>
            <ul>
                <li><img src={ahiruPng} alt="商品1"/></li>
                <li><img src={ahiruPng} alt="商品2"/></li>
                <li><img src={ahiruPng} alt="商品3"/></li>
                {/* 横並びにして、スクロールさせる。リストの設定を無しにする（黒点つけない）別コンポーネントに切り出す */}
                {/* レスポンシブ対応にしておく！ */}
            </ul>
            <div className="category-heading">カテゴリから探す</div>
            {/* <Categories/> */}
            <Footer/>
        </div>
    );
};

export default Top;