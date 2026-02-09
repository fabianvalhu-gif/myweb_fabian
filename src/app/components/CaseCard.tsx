import React from 'react';
import { Chip } from './Chip';
import { ArrowRight } from 'lucide-react';

interface CaseCardProps {
  title: string;
  subtitle: string;
  tags: string[];
  context: string;
  action: string;
  result: string;
  imageUrl: string;
}

export const CaseCard: React.FC<CaseCardProps> = ({ 
  title, 
  subtitle, 
  tags, 
  context, 
  action, 
  result,
  imageUrl 
}) => {
  return (
    <div className="bg-[#0F1621] border border-[rgba(255,255,255,0.08)] rounded-xl overflow-hidden hover:border-[#4DA3FF]/30 hover:shadow-xl hover:shadow-[#4DA3FF]/10 transition-all duration-300 hover:-translate-y-2 group">
      <div className="h-48 bg-gradient-to-br from-[#1F2937] to-[#0F1621] relative overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Chip key={index} variant="accent">{tag}</Chip>
          ))}
        </div>
        <h3 className="text-xl font-semibold text-[#E9EEF5] mb-2">{title}</h3>
        <p className="text-sm text-[#9AA6B2] mb-4">{subtitle}</p>
        <div className="space-y-3 mb-4">
          <div>
            <span className="text-xs font-medium text-[#4DA3FF] uppercase tracking-wide">Contexto:</span>
            <p className="text-sm text-[#9AA6B2] mt-1">{context}</p>
          </div>
          <div>
            <span className="text-xs font-medium text-[#4DA3FF] uppercase tracking-wide">Acción:</span>
            <p className="text-sm text-[#9AA6B2] mt-1">{action}</p>
          </div>
          <div>
            <span className="text-xs font-medium text-[#4DA3FF] uppercase tracking-wide">Resultado:</span>
            <p className="text-sm text-[#9AA6B2] mt-1">{result}</p>
          </div>
        </div>
        <a 
          href="#" 
          className="text-[#4DA3FF] text-sm font-medium inline-flex items-center gap-2 hover:gap-3 transition-all duration-300"
        >
          Ver detalle <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
};
