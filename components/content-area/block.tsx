// components/content-area/block.tsx

import dynamic from 'next/dynamic';
import blocksMapperFactory from '@/lib/utils/block-factory';

// Dynamically import each block

const SSHeroBlock = dynamic(() => import ('../blocks/SSHeroBlock'))

const SSTextBlock = dynamic(() => import ('../blocks/SSTextBlock'))

const SSMobileBankingBlock   = dynamic(() => import ('../blocks/SSMobileBankingBlock'))

const SSFeatures  = dynamic(() => import ('../blocks/SSFeatures'))

const CTASectionBlock = dynamic(() => import ('../blocks/CTASectionBlock'))

// Map the dynamically imported 
export const blocks = {
  SSHeroBlock,
  SSTextBlock, 
  SSFeatures,
  SSMobileBankingBlock ,
  CTASectionBlock
} as const;

export default blocksMapperFactory(blocks);

