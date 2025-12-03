import { render, screen } from "@testing-library/react";
import HomeList from "./HomeList";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";

describe("HomeList", () => {
  it("Renders title for Trending Anime list", () => {
    render(<HomeList />);
    const trendingElements = screen.getAllByText("Trending Anime");
    expect(trendingElements[0]).toBeInTheDocument();
  });

  it("Renders title for Highest Rated Anime list", () => {
    render(<HomeList />);
    const ratingElements = screen.getAllByText("Highest Rated Anime");
    expect(ratingElements[0]).toBeInTheDocument();
  });
});
