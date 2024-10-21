import { JSX, SVGProps } from 'react';

export default function Home() {
  return (
    <section className="py-24 font-sans">
      <div className="container mx-auto px-4">
        <h1 className="mb-6 text-center text-4xl font-bold">
          Team Development Starter Kit
        </h1>
        <p className="mb-8 text-center text-xl text-gray-600">
          Optimize your team collaboration and boost productivity today!
        </p>
        <ul className="mb-12 space-y-4 text-lg">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <CheckIcon className="mr-2 h-6 w-6 text-green-500" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const features = [
  'Ready-to-use configuration for quick start',
  'Integrated collaboration tools for enhanced team synergy',
  'Enhanced security with NextAuth.js and environment variable management',
  'Reusable components for a consistent user interface',
  'SEO optimization with advanced metadata management',
];

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}
