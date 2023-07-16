import { useState, useRef, useEffect } from "react";
import cn from "classnames";
import debounce from "lodash.debounce";

import { IAdvantage, IProduct } from "../../../types/types";
import AdvantageItem from "../AdvantageItem/AdvantageItem";
import CatalogItem from "../CatalogItem/CatalogItem";

import './scrollableContainer.sass';


const ScrollableContainer = ({catalog}: {catalog: IAdvantage[] | IProduct[]}) => {
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(false);

  const containerRef = useRef<HTMLUListElement>(null);

  const checkForScrollPosition = () => {
    const { current } = containerRef;
    if (current) {
      const { scrollLeft, scrollWidth, clientWidth } = current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft !== scrollWidth - clientWidth);
    }
  };

  const debounceCheckForScrollPosition = debounce(checkForScrollPosition, 100);

  const scrollContainerBy = (distance: number) =>
    containerRef.current?.scrollBy({ left: distance, behavior: "smooth" });

  useEffect(() => {
    const { current } = containerRef;
    checkForScrollPosition();
    current?.addEventListener("scroll", debounceCheckForScrollPosition);

    return () => {
      current?.removeEventListener("scroll", debounceCheckForScrollPosition);
      debounceCheckForScrollPosition.cancel();
    };
  }, []);

  return (
    <div className="scrollableContainer">
      <ul className="scrollableContainer__list" ref={containerRef}>
        {catalog.map(item =>
            <li className="scrollableContainer__list_item" key={item.id}>
                {/* @ts-ignore */}
                {item.description ?
                    //@ts-ignore
                    <AdvantageItem item={item} />
                    :
                    //@ts-ignore
                    <CatalogItem item={item} />
                }
            </li>
        )}
      </ul>
      <button
        type="button"
        disabled={!canScrollLeft}
        onClick={() => scrollContainerBy(-400)}
        className={cn("button", "buttonLeft", {
          "button--hidden": !canScrollLeft
        })}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 110 110" fill="none">
          <g opacity="0.8" filter="url(#filter0_d_17_349)">
              <g clipPath="url(#clip0_17_349)">
              <rect x="24" y="24" width="62" height="62" rx="31" fill="white"/>
              <path d="M49.8333 39.5L46.1908 43.1425L58.0225 55L46.1908 66.8575L49.8333 70.5L65.3333 55L49.8333 39.5Z" fill="#282828"/>
              </g>
          </g>
          <defs>
              <filter id="filter0_d_17_349" x="0" y="0" width="110" height="110" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset/>
              <feGaussianBlur stdDeviation="12"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_17_349"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_17_349" result="shape"/>
              </filter>
              <clipPath id="clip0_17_349">
              <rect x="24" y="24" width="62" height="62" rx="31" fill="white"/>
              </clipPath>
          </defs>
        </svg>
      </button>
      <button
        type="button"
        disabled={!canScrollRight}
        onClick={() => scrollContainerBy(400)}
        className={cn("button", "buttonRight", {
          "button--hidden": !canScrollRight
        })}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 110 110" fill="none">
          <g opacity="0.8" filter="url(#filter0_d_17_349)">
              <g clipPath="url(#clip0_17_349)">
              <rect x="24" y="24" width="62" height="62" rx="31" fill="white"/>
              <path d="M49.8333 39.5L46.1908 43.1425L58.0225 55L46.1908 66.8575L49.8333 70.5L65.3333 55L49.8333 39.5Z" fill="#282828"/>
              </g>
          </g>
          <defs>
              <filter id="filter0_d_17_349" x="0" y="0" width="110" height="110" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset/>
              <feGaussianBlur stdDeviation="12"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_17_349"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_17_349" result="shape"/>
              </filter>
              <clipPath id="clip0_17_349">
              <rect x="24" y="24" width="62" height="62" rx="31" fill="white"/>
              </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  );
};

export default ScrollableContainer;