import { useNextSanityImage } from 'next-sanity-image';
import sanityClient from './sanity';

export const sanityImageHandler = (assetId: any) => {
  const image = useNextSanityImage(sanityClient, {
    // Image asset ID or slug
    asset: assetId,
    // Optional: width and height for responsive image
    // width: 400,
    // height: 300,
  });

  return image;
};
