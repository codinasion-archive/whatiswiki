import React from "react";

export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

export default function ScrollToTop() {
  React.useEffect(() => {
    window.onscroll = function () {
      const scrollTopButton = document.getElementById("scroll-top-btn")!;
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        scrollTopButton.style.display = "block";
      } else {
        scrollTopButton.style.display = "none";
      }
    };
  }, []);

  return (
    <>
      <button
        id="scroll-top-btn"
        onClick={scrollToTop}
        className="hidden fixed bottom-4 right-4 bg-gray-100 dark:bg-gray-800 rounded-full p-2 shadow-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-800 dark:text-gray-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 11l7-7 7 7M5 19l7-7 7 7"
          />
        </svg>
      </button>
    </>
  );
}
