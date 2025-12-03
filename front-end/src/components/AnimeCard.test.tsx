import { render, screen, cleanup } from "@testing-library/react";
import AnimeCard from "./AnimeCard";
import { describe, it, expect, afterEach, vi } from "vitest";
import "@testing-library/jest-dom/vitest";

describe("AnimeCard", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("Renders AnimeCard props and displays them", () => {
    const mockAnimeProps = {
      title: "Skibidi",
      image: "skibidi.jpg",
      rating: "6.7",
      genre: "diddy-bluhd-mango",
    };

    render(<AnimeCard {...mockAnimeProps} />);

    expect(screen.getByText("Skibidi")).toBeInTheDocument();
    expect(screen.getByText("Genre: diddy-bluhd-mango")).toBeInTheDocument();
    expect(screen.getByText("Rating: 6.7")).toBeInTheDocument();

    // check image src/alt
    const image = screen.getByAltText("Skibidi");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "skibidi.jpg");
  });

  it("Does not render genre title if genre data is missing", () => {
    const mockAnimeProps = {
      title: "Skibidi",
      image: "skibidi.jpg",
      rating: "6.7",
      genre: "", // mock no genre data being passed through
    };

    render(<AnimeCard {...mockAnimeProps} />);
    expect(screen.queryByText(/Genre:/)).not.toBeInTheDocument();
  });

  it("Does not render rating title if rating data is missing", () => {
    const mockAnimeProps = {
      title: "Skibidi",
      image: "skibidi.jpg",
      rating: "", // mock no rating data being passed through
      genre: "diddy-bluhd-mango",
    };

    render(<AnimeCard {...mockAnimeProps} />);
    expect(screen.queryByText(/Rating:/)).not.toBeInTheDocument();
  });
});
