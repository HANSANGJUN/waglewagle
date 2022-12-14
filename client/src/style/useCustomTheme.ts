import { useSelector } from 'react-redux';
import { RootState } from '../store';

const dark = {
  mainBackground: '#292B2E',
  // neutral color
  primaryText: 'rgb(241,242,245)',
  secondaryText: 'rgba(255,255,255,0.45)',
  disable: 'rgba(255,255,255,0.25)',
  border: '#d1d5da',
  divider: '#5a5a5a',
  background: '#1d1d1f',
  backgroundSub: '#3a3a3a',
  tableHeader: 'rgba(255,255,255,0.02)',
  themeIcon: '#ffffff',
  searchBar: 'rgba(255,255,255,0.7)',
  // button-color
  defaultButtonColor: '#ffffff',
  defaultButtonBackground: '#202020',
  // point-color
  hover: '#7CACF8',
  hoverBackground: '#2a2727',
};

const light = {
  mainBackground: '#fff',
  // neutral color
  primaryText: '#292B2E',
  secondaryText: 'rgba(0, 0, 0, 0.45)',
  disable: 'rgba(0, 0, 0, 0.25)',
  border: '#d1d5da',
  divider: 'rgba(106, 115, 125, 0.3)',
  background: 'rgb(241,242,245)',
  backgroundSub: '#ffffff',
  tableHeader: 'rgba(0, 0, 0, 0.02)',
  themeIcon: '#002366',
  searchBar: 'rgba(0,35,102,0.8)',
  // button-color
  defaultButtonColor: '#4169e1',
  defaultButtonBackground: '#ffffff',
  // point-color
  hover: '#4169e1',
  hoverBackground: 'rgb(245,245,245)',
};

const fontSizes = {
  xsm: '10px',
  sm: '12px',
  md: '16px',
  lg: '20px',
  xl: '24px',
  xxl: '28px',
};

const fontWeights = {
  extraBold: 800,
  bold: 700,
  semiBold: 600,
  regular: 400,
};

const useCustomTheme = () => {
  const mode = useSelector((state: RootState) => state.darkMode.mode) as string;

  const theme =
    mode === 'light'
      ? { mode: light, fontSizes, fontWeights }
      : { mode: dark, fontSizes, fontWeights };

  return theme;
};

export default useCustomTheme;
