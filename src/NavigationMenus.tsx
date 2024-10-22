//後日もう少し修正する
import { NavLink, Outlet } from "react-router-dom";
import './assets/NavigationMenus.css';
import logoSvg from './assets/logo.svg';

import { Stack, IconButton, AppBar, Toolbar, InputBase, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonIcon from '@mui/icons-material/Person';
import { Search as SearchIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#ffffff', // 検索窓の背景色を白に設定
  border: '1px solid black',  // 黒の枠線を追加
  marginLeft: theme.spacing(1),
  width: '100%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  right: 0,  // 検索アイコンを右端に寄せる
  Color: '##1F1F1F',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',  // 入力された文字列を黒で表示
  width: '100%',   // 検索窓が幅いっぱいに広がる
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 1),
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    paddingRight: `calc(1em + ${theme.spacing(1)})`, // アイコン用のスペースを確保
  },
}));

// 検索アイコンの色を黒にする
const SearchIconStyled = styled(SearchIcon)(({ theme }) => ({
  color: 'black',  // 検索アイコンの色を黒に変更
}));

const NavigationMenus: React.FC = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 'none' }}> {/* 背景色を白に変更 */}
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, width: '1em',}}
              component={NavLink} to=""
            >
              <img src={logoSvg} alt="Logo" width={40} height={40} />
            </IconButton>
            <Search>
              <SearchIconWrapper>
                <SearchIconStyled />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="検索…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <Stack spacing={1} direction="row" sx={{ ml: 2 }}>
              <IconButton component={NavLink} to="/ShoppingCart" aria-label="shopping cart">
                <ShoppingCartIcon />
              </IconButton>
              <IconButton component={NavLink} to="/LikeList" aria-label="like list">
                <FavoriteBorderIcon />
              </IconButton>
              <IconButton component={NavLink} to="/UserPage" aria-label="user">
                <PersonIcon />
              </IconButton>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </>
  );
};

export default NavigationMenus;
