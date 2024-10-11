import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className="py-24">
        <div className="container">
          <h1 className="mb-6 text-center text-3xl font-bold">
            The next-generation Team Development Starter Kit for ambitious
            developers
          </h1>
          <p className="text-muted-foreground mb-8 text-center">
            Optimize your team collaboration and boost productivity today!
          </p>
          <div className="mb-8 flex justify-center space-x-2">
            <Image
              src="https://visitor-badge.laobi.icu/badge?page_id=drondiodev.team-starter-nextjs"
              alt="visitors"
              width={100}
              height={30}
            />
            <Image
              src="https://img.shields.io/github/last-commit/drondiodev/team-starter-nextjs"
              alt="last commit"
              width={100}
              height={30}
            />
            <Image
              src="https://img.shields.io/github/forks/drondiodev/team-starter-nextjs"
              alt="forks"
              width={100}
              height={20}
            />
            <Image
              src="https://img.shields.io/github/stars/drondiodev/team-starter-nextjs"
              alt="stars"
              width={100}
              height={20}
            />
            <Image
              src="https://img.shields.io/github/watchers/drondiodev/team-starter-nextjs"
              alt="watchers"
              width={100}
              height={20}
            />
          </div>
          <ul className="space-y-4 text-lg">
            <li className="flex items-center">
              <svg
                className="mr-2 h-6 w-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Ready-to-use configuration for quick start
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-6 w-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Integrated collaboration tools for enhanced team synergy
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-6 w-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Standardized development practices for increased consistency
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-6 w-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Guaranteed scalability to adapt to your company&apos;s growth
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-6 w-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Continuous support and regular updates
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
