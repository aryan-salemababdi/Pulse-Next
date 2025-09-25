'use client';
import { NextPage } from 'next';
import React from 'react';

interface InfoCardProps {
  icon: string;
  title: string;
  text: string;
}

const InfoCard: NextPage<InfoCardProps> = ({ icon, title, text }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="font-bold text-xl mb-2">{title}</h3>
    <p className="text-gray-600">{text}</p>
  </div>
);

export default InfoCard;
