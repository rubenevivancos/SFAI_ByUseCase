import React from "react";
import './styles/globals.css';
interface TestimonialProps {
    quote: string;
    name: string;
    role: string;
    company: string;
    image?: string;
}
export declare function Testimonial({ quote, name, role, company, image }: TestimonialProps): React.JSX.Element;
export {};
