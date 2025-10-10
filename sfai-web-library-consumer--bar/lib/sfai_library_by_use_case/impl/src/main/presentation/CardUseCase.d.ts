import React from "react";
import { LucideIcon } from "lucide-react";
interface CardUseCaseProps {
    icon: LucideIcon;
    title: string;
    description: string;
    metric: string;
    badge?: string;
    ctaLink?: string;
}
export declare function CardUseCase({ icon: Icon, title, description, metric, badge, }: CardUseCaseProps): React.JSX.Element;
export {};
