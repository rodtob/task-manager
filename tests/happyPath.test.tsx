import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import App from "../src/App";
import { describe, it, beforeEach, afterEach } from "vitest";

describe("Task Manager App - Acceptance Tests", () => {
  beforeEach(() => {
    localStorage.clear(); 
    cleanup();        
    render(<App />);
  });

  afterEach(() => {
    cleanup();
  });

  it("renders the main header", () => {
    const header = screen.getByText(/Task Manager/i);
    expect(header).toBeInTheDocument();
  });

  it("renders the task counter, filters, and search bar", () => {
  const counter = screen.getByTestId("task-counter");
  const filter = screen.getByTestId("status-filter");
  const search = screen.getByTestId("search-bar");

  expect(counter).toBeInTheDocument();
  expect(filter).toBeInTheDocument();
  expect(search).toBeInTheDocument();
});

it("can add a new task", () => {
  const addButton = screen.getByText(/Add Task/i);
  fireEvent.click(addButton);

  const taskTitle = screen.getByTestId(/task-title-/i);
  const taskPriority = screen.getByTestId(/task-priority-/i);

  expect(taskTitle).toBeInTheDocument();
  expect(taskPriority).toBeInTheDocument();

  const counter = screen.getByTestId("task-counter");
  expect(counter).toHaveTextContent("Total tasks: 1Completed: 0");
});
});
