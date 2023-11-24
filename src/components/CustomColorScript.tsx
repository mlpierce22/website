"use client"

import dynamic from 'next/dynamic';

export const CustomColorScript = dynamic(
    () => import('@chakra-ui/react').then((mod) => mod.ColorModeScript),
    { ssr: false }
);