'use client';
import { NextPage } from 'next';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const Title: NextPage<SectionTitleProps> = ({ title, subtitle }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold">{title}</h2>
    <p className="text-gray-600 mt-2">{subtitle}</p>
  </div>
);

export default Title;
