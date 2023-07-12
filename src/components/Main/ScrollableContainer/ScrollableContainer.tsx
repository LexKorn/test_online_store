import { useState, useRef, useEffect } from "react";
import cn from "classnames";
import debounce from "lodash.debounce";

import { IProduct } from "../../../types/types";
import CatalogItem from "../CatalogItem/CatalogItem";

import './scrollableContainer.sass';


const ScrollableContainer = ({catalog}: {catalog: IProduct[]}) => {
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

  const debounceCheckForScrollPosition = debounce(checkForScrollPosition, 200);

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
            <li className="scrollableContainer__list_item">
                <CatalogItem item={item} key={item.id} />
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
        ←
      </button>
      <button
        type="button"
        disabled={!canScrollRight}
        onClick={() => scrollContainerBy(400)}
        className={cn("button", "buttonRight", {
          "button--hidden": !canScrollRight
        })}
      >
        →
      </button>
    </div>
  );
};

export default ScrollableContainer;