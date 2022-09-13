import { fireEvent, render, screen } from "@testing-library/react";
import { UserCard } from "./user-card";

describe("user-card component", () => {
  describe("render a user-card", () => {
    it.skip("should render a user-card with name", () => {
      render(<UserCard />);
      expect(screen.getByText(/First Name:/i)).toBeInTheDocument();
      expect(screen.getByText(/Last Name:/i)).toBeInTheDocument();
    });

    it.skip("should render a user-card with price, location and seller", () => {
      render(<UserCard />);
      expect(screen.getByText(/Work at:/i)).toBeInTheDocument();
      expect(screen.getByText(/School:/i)).toBeInTheDocument();
      expect(screen.getByText(/City:/i)).toBeInTheDocument();
      expect(screen.getByText(/Country:/i)).toBeInTheDocument();
      expect(screen.getByText(/Address:/i)).toBeInTheDocument();
    });
  });

  describe("props", () => {
    it.skip("should render a user-card with custom props", () => {
      render(
        <UserCard
          firstName="Tri"
          lastName="Pham"
          workAt="mgm"
          school="DTU"
          city="Da Nang"
          country="Viet Nam"
          address="DTU"
        />
      );

      expect(screen.getByText(/First Name: Tri/i)).toBeInTheDocument();
      expect(screen.getByText(/Last Name: Pham/i)).toBeInTheDocument();
      expect(screen.getByText(/Work at: mgm/i)).toBeInTheDocument();
      expect(screen.getByText(/School: DTU/i)).toBeInTheDocument();
      expect(screen.getByText(/City: Da Nang/i)).toBeInTheDocument();
      expect(screen.getByText(/Country: Viet Nam/i)).toBeInTheDocument();
      expect(screen.getByText(/Address: DTU/i)).toBeInTheDocument();
    });
    it.skip('should render an "unknown" text for any missing information', () => {
      render(<UserCard />);

      expect(screen.getByText(/First Name: unknown/i)).toBeInTheDocument();
      expect(screen.getByText(/Last Name: unknown/i)).toBeInTheDocument();
      expect(screen.getByText(/Work at: unknown/i)).toBeInTheDocument();
      expect(screen.getByText(/School: unknown/i)).toBeInTheDocument();
      expect(screen.getByText(/City: unknown/i)).toBeInTheDocument();
      expect(screen.getByText(/Country: unknown/i)).toBeInTheDocument();
      expect(screen.getByText(/Address: unknown/i)).toBeInTheDocument();
    });
  });

  describe("crud", () => {
    it.skip("should render a user-card with a update button", () => {
      const onUpdate = jest.fn();
      render(<UserCard firstName="Tri" lastName="Pham" onUpdate={onUpdate} />);

      const updateButton = screen.getByText("Update");
      expect(updateButton).toBeInTheDocument();
      fireEvent.click(updateButton);
      expect(onUpdate.mock.calls).toHaveLength(1);
      const [firstCall] = onUpdate.mock.calls;
      const [param] = firstCall;
      expect(param).toHaveProperty("firstName", "Tri");
    });

    it.skip("should render a user-card with a delete button", () => {
      const onDelete = jest.fn();
      render(<UserCard firstName="Tri" lastName="Pham" onDelete={onDelete} />);

      const deleteButton = screen.getByText("Update");
      expect(deleteButton).toBeInTheDocument();
      fireEvent.click(deleteButton);
      expect(onDelete.mock.calls).toHaveLength(1);
      const [firstCall] = onDelete.mock.calls;
      const [param] = firstCall;
      expect(param).toHaveProperty("firstName", "Tri");
    });
  });
});
