import { createContext } from 'react';
import SHOP_DATA from './shop.data';

const CollectionsContext = createContext(SHOP_DATA); //like component must start with capital

export default CollectionsContext;
