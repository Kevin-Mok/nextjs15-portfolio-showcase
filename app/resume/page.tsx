import React from 'react';
import type { Metadata } from 'next';
import { ResumeContent } from '@/components/tiles/content/ResumeContent';
import { resolveResumeVariantId } from '@/lib/resume-data';

/**
 * Resume Full Page View
 * Displays resume in LaTeX-inspired styling with PDF download options
 *
 * Route: /resume
 * SEO optimized for recruiters and job search
 */

export const metadata: Metadata = {
  title: 'Resume - Kevin Mok | Software Engineer',
  description:
    'Ex-Cloud Engineer Intern @ Red Hat. Full-stack + cloud engineer (TypeScript/React, AWS/Kubernetes). Linux/FOSS advocate. CS @ UofT.',
  keywords: [
    'Kevin Mok',
    'Resume',
    'CV',
    'Software Engineer',
    'TypeScript Developer',
    'React Developer',
    'Node.js',
    'Python',
    'Cloud Engineer',
    'Full Stack Developer',
    'Red Hat',
    'University of Toronto',
  ],
  openGraph: {
    title: 'Kevin Mok - Software Engineer Resume',
    description: 'Full-stack engineer with expertise in TypeScript, React, Node.js, and cloud infrastructure',
    type: 'profile',
    url: 'https://kevin-mok.com/resume',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Kevin Mok - Software Engineer Resume',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kevin Mok - Software Engineer Resume',
    description:
      'Ex-Cloud Engineer Intern @ Red Hat. Full-stack + cloud engineer (TypeScript/React, AWS/Kubernetes). Linux/FOSS advocate. CS @ UofT.',
    images: ['/opengraph-image.png'],
  },
};

export const revalidate = 3600; // ISR: 1 hour

interface ResumePageProps {
  searchParams?: Promise<{
    variant?: string;
    render?: string;
  }>;
}

export default async function ResumePage({ searchParams }: ResumePageProps) {
  const resolvedSearchParams = await searchParams;
  const initialVariantId = resolveResumeVariantId(resolvedSearchParams?.variant);
  const renderMode = resolvedSearchParams?.render === 'pdf' ? 'pdf' : 'screen';

  return (
    <div className="bg-white text-black min-h-screen py-6 sm:py-8 px-3 sm:px-5 md:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="resume-page-surface">
          <ResumeContent initialVariantId={initialVariantId} renderMode={renderMode} />
        </div>
      </div>
    </div>
  );
}
