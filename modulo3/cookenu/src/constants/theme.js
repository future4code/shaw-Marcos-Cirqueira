import { createTheme } from '@material-ui/core/styles';
import { primaryColor, neutralColor } from './colors';

export const theme = createTheme({
  palette: {
    primary: {      
      main: primaryColor,
      contrastText: "white"      
    },
    text: {
        primary: neutralColor
    }
}
})
