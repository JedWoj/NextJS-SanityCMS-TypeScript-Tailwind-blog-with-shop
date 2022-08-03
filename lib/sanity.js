import {
    createClient,
    createPreviewSubscriptionHook,
    // createPortableTextComponent
} from 'next-sanity';

import createImageUrlBuilder from '@sanity/image-url';

const config = {
    projectId: 'n6l40bkl',
    dataset: 'production',
    apiVersion: '2021-10-21',
    useCdn: true,
};

export const sanityClient = createClient(config);

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

// export const PortableText = createPortableTextComponent({
//     ...config,
//     serializers: {},
// })