import React from 'react';
import { LucideIcon } from 'lucide-react';
import './styles/globals.css';
interface CardProyectoProps {
    icon: LucideIcon;
    title: string;
    description: string;
    metric: string;
    ctaLink?: string;
}
export declare function CardProject({ icon: Icon, title, description, metric, ctaLink, }: CardProyectoProps): React.JSX.Element;
export {};
