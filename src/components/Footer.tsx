import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const Footer = () => {
    // navigate関数を取得
    const navigate = useNavigate();
    return (
        <>
        {/* スタイル設定によっては、ulもいらないかも？<>ではなく、Reactのコンポーネントを導入したりコンテナにする？ */}
            <ul>
                <Button //これはサンプル
                    variant="contained" 
                    endIcon={<KeyboardArrowRightIcon />} 
                    onClick={() => navigate("CompanyProfile")}>
                    会社概要
                </Button>
                
                <li>会社概要</li>
                <li>個人情報保護方針</li>
                <li>ご利用ガイド</li>
                <li>会員情報・ログイン</li>
                <li>商品一覧</li>
                <li>お問い合わせ</li>
                {/* 後ほどstyled API を設定する  */}
                {/* グリッドにする */}
            </ul>
            
        </>
    );
};

export default Footer;