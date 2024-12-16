'use client';

import { useEffect } from 'react';
import ForkMe from 'fork-me-github';

export function GitHubRibbon() {
    useEffect(() => {
        ForkMe('https://github.com/apirobots/fortune-and-cowsay-app');
    }, []);

    return null;
}