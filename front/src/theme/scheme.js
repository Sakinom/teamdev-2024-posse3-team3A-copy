import { createTheme } from '@mui/material/styles';

// デフォルトのテーマを取得
const defaultTheme = createTheme();

// カスタムカラーオプションを定義
const customPalette = {
  primary: {
    main: '#14B8A6',
  },
};

// カスタムテーマを作成
const theme = createTheme({
  palette: {
    ...defaultTheme,
    ...customPalette,
  },
});

export default theme;
