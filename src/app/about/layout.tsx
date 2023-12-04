import Layout from '@/app/prose-layout'
import React from 'react'

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return (
        <Layout hideBack={true}>
            {children}
        </Layout>
    )
}
