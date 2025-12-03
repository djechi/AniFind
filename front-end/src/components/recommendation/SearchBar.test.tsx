import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";
import { describe, it, expect, afterEach, vi } from "vitest";
import "@testing-library/jest-dom/vitest";

describe("SearchBar", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("Renders default searchbar message", () => {
    render(<SearchBar />);
    expect(
      screen.getByPlaceholderText("Search for anime..."),
    ).toBeInTheDocument();
  });

  it("Does not fetch suggestions when typing less than 3 letters", () => {
    // Mock fetch (detects if code calls fetch)
    globalThis.fetch = vi.fn();

    render(<SearchBar />);
    const searchInput = screen.getAllByTestId("search-input");

    // 2 letter input
    fireEvent.change(searchInput[1], { target: { value: "na" } });

    // check if fetch is not called (query.length < 3 so fetch is not called)
    expect(fetch).not.toHaveBeenCalled();
  });
});
