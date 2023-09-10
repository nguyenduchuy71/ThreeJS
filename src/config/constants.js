import { swatch, fileIcon, ai, logoShirt, stylishShirt, download } from '../assets';

export const EditorTabs = [
  {
    name: 'colorpicker',
    icon: swatch,
    desc: 'Color Picker',
  },
  {
    name: 'filepicker',
    icon: fileIcon,
    desc: 'File Picker',
  },
  {
    name: 'download',
    icon: download,
    desc: 'Download Image',
  },
  // {
  //   name: "aipicker",
  //   icon: ai,
  // },
];

export const FilterTabs = [
  {
    name: 'logoShirt',
    icon: logoShirt,
    desc: 'Logo Shirt',
  },
  {
    name: 'stylishShirt',
    icon: stylishShirt,
    desc: 'Stylish Shirt',
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: 'logoDecal',
    filterTab: 'logoShirt',
  },
  full: {
    stateProperty: 'fullDecal',
    filterTab: 'stylishShirt',
  },
};
