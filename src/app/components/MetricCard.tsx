import React from 'react';
import { Card } from './Card';

interface MetricCardProps {
  value: string;
  label: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({ value, label }) => {
  return (
    <Card hover={false} className="text-center">
      <div className="text-5xl font-semibold text-[#4DA3FF] mb-2">{value}</div>
      <div className="text-sm text-[#9AA6B2]">{label}</div>
    </Card>
  );
};
