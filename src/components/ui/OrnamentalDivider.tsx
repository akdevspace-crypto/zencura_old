'use client';


export const OrnamentalDivider = ({ className = "" }: { className?: string }) => {
    return (
        <div className={`flex items-center justify-center w-full my-12 ${className}`}>
            <div className="h-[1px] bg-brand/20 flex-grow" />
            <div className="mx-6 flex items-center space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand/40" />
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-brand/60"
                >
                    <path
                        d="M20 5C20 5 22 15 35 15C22 15 20 25 20 25C20 25 18 15 5 15C18 15 20 5 20 5Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                    />
                    <circle cx="20" cy="20" r="3" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <div className="w-1.5 h-1.5 rounded-full bg-brand/40" />
            </div>
            <div className="h-[1px] bg-brand/20 flex-grow" />
        </div>
    );
};
