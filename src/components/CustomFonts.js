import { Global } from '@mantine/core';

import black from '../fonts/Gotham/Gotham-Black.otf'
import bold from '../fonts/Gotham/Gotham-Bold.otf'
import bookitalic from '../fonts/Gotham/Gotham-BookItalic.otf'
import light from '../fonts/Gotham/Gotham-Light.otf'
import thin from '../fonts/Gotham/Gotham-Thin.otf'
import thinitalic from '../fonts/Gotham/Gotham-ThinItalic.otf'
import ultraitalic from '../fonts/Gotham/Gotham-UltraItalic.otf'
import xlight from '../fonts/Gotham/Gotham-XLight.otf'
import xlightitalic from '../fonts/Gotham/Gotham-XLightItalic.otf'
import bold2 from '../fonts/Gotham/GothamBold.ttf'
import bolditalic2 from '../fonts/Gotham/GothamBoldItalic.ttf'
import book2 from '../fonts/Gotham/GothamBook.ttf'
import bookitalic2 from '../fonts/Gotham/GothamBookItalic.ttf'
import light2 from '../fonts/Gotham/GothamLight.ttf'
import lightitalic2 from '../fonts/Gotham/GothamLightItalic.ttf'
import medium from '../fonts/Gotham/GothamMedium.ttf'
import mediumitalic2 from '../fonts/Gotham/GothamMediumItalic.ttf'
import nova from '../fonts/Proxima Nova/Proxima Nova Font.otf'

import lexend from '../fonts/Lexend/Lexend-VariableFont_wght.ttf'

const CustomFonts = () => {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Gotham',
            src: `url('${thinitalic}') format("opentype")`,
            fontStyle: 'italic',
            fontWeight: '100'
          },
        },
        {
          '@font-face': {
            fontFamily: 'Gotham',
            src: `url('${xlightitalic}') format("opentype")`,
            fontStyle: 'italic',
            fontWeight: '200'
          },
        },
        {
          '@font-face': {
            fontFamily: 'Gotham',
            src: `url('${lightitalic2}') format("truetype")`,
            fontStyle: 'italic',
            fontWeight: '300'
          },
        },
        {
          '@font-face': {
            fontFamily: 'Gotham',
            src: `url('${bookitalic2}') format("truetype")`,
            fontStyle: 'italic',
            fontWeight: '400'
          },
        },
        {
          '@font-face': {
            fontFamily: 'Gotham',
            src: `url('${bookitalic}') format("opentype")`,
            fontStyle: 'italic',
            fontWeight: '500'
          },
        },
        {
          '@font-face': {
            fontFamily: 'Gotham',
            src: `url('${mediumitalic2}') format("truetype")`,
            fontStyle: 'italic',
            fontWeight: '600'
          },
        },
        {
          '@font-face': {
            fontFamily: 'Gotham',
            src: `url('${bolditalic2}') format("truetype")`,
            fontStyle: 'italic',
            fontWeight: '700'
          },
        },
        {
          '@font-face': {
            fontFamily: 'Gotham',
            src: `url('${ultraitalic}') format("opentype")`,
            fontStyle: 'italic',
            fontWeight: '800'
          },
        },
        {
          '@font-face': {
            fontFamily: 'Gotham',
            src: `url('${thin}') format("opentype")`,
            fontStyle: 'normal',
            fontWeight: '100'
          },
        },
        {
          '@font-face': {
            fontFamily: 'Gotham',
            src: `url('${xlight}') format("opentype")`,
            fontStyle: 'normal',
            fontWeight: '200'
          },
        },
        {
          '@font-face': {
            fontFamily: 'Gotham',
            src: `url('${light2}') format("truetype")`,
            fontStyle: 'normal',
            fontWeight: '300'
          },
        },
        {
          '@font-face': {
            fontFamily: 'Gotham',
            src: `url('${light}') format("opentype")`,
            fontStyle: 'normal',
            fontWeight: '400'
          },
        },
        {
          '@font-face': {
            fontFamily: 'Gotham',
            src: `url('${book2}') format("truetype")`,
            fontStyle: 'normal',
            fontWeight: '500'
          },
        },
        {
          '@font-face': {
            fontFamily: 'Gotham',
            src: `url('${medium}') format("truetype")`,
            fontStyle: 'normal',
            fontWeight: '600'
          },
        },
        {
          '@font-face': {
            fontFamily: 'Gotham',
            src: `url('${bold}') format("opentype")`,
            fontStyle: 'normal',
            fontWeight: '700'
          },
        },
        {
          '@font-face': {
            fontFamily: 'Gotham',
            src: `url('${bold2}') format("truetype")`,
            fontStyle: 'normal',
            fontWeight: '800'
          },
        },
        {
          '@font-face': {
            fontFamily: 'Gotham',
            src: `url('${black}') format("opentype")`,
            fontStyle: 'normal',
            fontWeight: '900'
          },
        },
        {
          '@font-face': {
            fontFamily: 'Proxima Nova',
            src: `url('${nova}') format("opentype")`,
          },
        },
        {
          '@font-face': {
            fontFamily: 'Lexend',
            src: `url('${lexend}') format("truetype")`,
          },
        }
      ]}
    />
  );
}

export default CustomFonts;