import { fireEvent, render, screen } from "@testing-library/react";
import { UserForm } from "./user-form";

describe("user form component", () => {
  describe("render the form", () => {
    it.skip("should render inputs with labels", () => {
      render(<UserForm></UserForm>);
      expect(screen.getByText("First Name")).toBeInTheDocument();
      expect(screen.getByLabelText("Last Name")).toBeInTheDocument();
      expect(screen.getByText("Last Name")).toBeInTheDocument();
      expect(screen.getByLabelText("Last Name")).toBeInTheDocument();
      expect(screen.getByText("Work at")).toBeInTheDocument();
      expect(screen.getByLabelText("Work at")).toBeInTheDocument();
      expect(screen.getByText("School")).toBeInTheDocument();
      expect(screen.getByLabelText("School")).toBeInTheDocument();
      expect(screen.getByText("City")).toBeInTheDocument();
      expect(screen.getByLabelText("City")).toBeInTheDocument();
      expect(screen.getByText("Country")).toBeInTheDocument();
      expect(screen.getByLabelText("Country")).toBeInTheDocument();
      expect(screen.getByText("Address")).toBeInTheDocument();
      expect(screen.getByLabelText("Address")).toBeInTheDocument();
    });

    it.skip("should render submit button", () => {
      render(<UserForm></UserForm>);
      const button = screen.getByText("Submit");
      expect(button).toBeInTheDocument();
    });

    it.skip("should render cancel button", () => {
      render(<UserForm></UserForm>);
      const button = screen.getByText("Cancel");
      expect(button).toBeInTheDocument();
    });
  });

  describe("onSubmit", () => {
    it.skip("should receive formData on submit", () => {
      const onSubmit = jest.fn();
      render(<UserForm onSubmit={onSubmit}></UserForm>);

      fillInput("First Name", "Tri");
      fillInput("Last Name", "Pham");
      fillInput("Work at", "mgm");
      fillInput("School", "DTU");
      fillInput("City", "Da Nang");
      fillInput("Country", "Viet Nam");
      fillInput("Address", "DTU");

      fireEvent.click(screen.getByText("Submit"));
      expect(onSubmit.mock.calls).toHaveLength(1);

      const [firstCall] = onSubmit.mock.calls;
      const [param] = firstCall;
      expect(param).toHaveProperty("firstName", "Tri");
      expect(param).toHaveProperty("lastName", "Pham");
      expect(param).toHaveProperty("workAt", "mgm");
      expect(param).toHaveProperty("school", "DTU");
      expect(param).toHaveProperty("city", "Da Nang");
      expect(param).toHaveProperty("country", "Viet Nam");
      expect(param).toHaveProperty("address", "DTU");
    });

    it.skip("should clean input values after submitting", () => {
      const onSubmit = jest.fn();
      const onCancel = jest.fn();
      render(<UserForm onSubmit={onSubmit}></UserForm>);

      fillInput("First Name", "Tri");
      fillInput("Last Name", "Pham");
      fillInput("Work at", "mgm");
      fillInput("School", "DTU");
      fillInput("City", "Da Nang");
      fillInput("Country", "Viet Nam");
      fillInput("Address", "DTU");

      fireEvent.click(screen.getByText("Submit"));
      expect(onSubmit.mock.calls).toHaveLength(1);
      expect(onCancel.mock.calls).toHaveLength(0);

      expect(screen.getByLabelText("First Name").value).toBe("");
      expect(screen.getByLabelText("Last Name").value).toBe("");
      expect(screen.getByLabelText("Work at").value).toBe("");
      expect(screen.getByLabelText("School").value).toBe("");
      expect(screen.getByLabelText("City").value).toBe("");
      expect(screen.getByLabelText("Country").value).toBe("");
      expect(screen.getByLabelText("Address").value).toBe("");
    });

    it.skip("should clean input values when click cancel button", () => {
      const onSubmit = jest.fn();
      const onCancel = jest.fn();
      render(<UserForm onSubmit={onSubmit} onCancel={onCancel}></UserForm>);
      fillInput("First Name", "Tri");
      fillInput("Last Name", "Pham");
      fillInput("Work at", "mgm");
      fillInput("School", "DTU");
      fillInput("City", "Da Nang");
      fillInput("Country", "Viet Nam");
      fillInput("Address", "DTU");

      fireEvent.click(screen.getByText("Cancel"));
      expect(onSubmit.mock.calls).toHaveLength(0);
      expect(onCancel.mock.calls).toHaveLength(1);

      expect(screen.getByLabelText("First Name").value).toBe("");
      expect(screen.getByLabelText("Last Name").value).toBe("");
      expect(screen.getByLabelText("Work at").value).toBe("");
      expect(screen.getByLabelText("School").value).toBe("");
      expect(screen.getByLabelText("City").value).toBe("");
      expect(screen.getByLabelText("Country").value).toBe("");
      expect(screen.getByLabelText("Address").value).toBe("");
    });
  });

  describe("validation", () => {
    it.skip("should validate first name input", () => {
      const onSubmit = jest.fn();
      render(<UserForm onSubmit={onSubmit}></UserForm>);

      fillInput(
        "First Name",
        "wopitjhw98trijhertohjrtiohjertohijtoerpihjrtehj8trhjerot9jhroithjer9thjro"
      );
      const warningLabel = screen.getByText(
        "First Name should be within 24 characters."
      );
      expect(warningLabel).toBeInTheDocument();
    });

    it.skip("should validate last name input", () => {
      const onSubmit = jest.fn();
      render(<UserForm onSubmit={onSubmit}></UserForm>);

      fillInput(
        "Last Name",
        "wopitjhw98trijhertohjrtiohjertohijtoerpihjrtehj8trhjerot9jhroithjer9thjro"
      );
      const warningLabel = screen.getByText(
        "Last Name should be within 24 characters."
      );
      expect(warningLabel).toBeInTheDocument();
    });

    it.skip("should validate school input", () => {
      const onSubmit = jest.fn();
      render(<UserForm onSubmit={onSubmit}></UserForm>);

      fillInput("School", "iu9e8ge");
      const warningLabel = screen.getByText(
        "School is either DTU, DUT or FPT."
      );
      expect(warningLabel).toBeInTheDocument();
    });

    it.skip("should validate city input", () => {
      const onSubmit = jest.fn();
      render(<UserForm onSubmit={onSubmit}></UserForm>);

      fillInput("City", "Nha Trang");
      const warningLabel = screen.getByText(
        "City is either Da Nang, Ha Noi or Ho Chi Minh."
      );
      expect(warningLabel).toBeInTheDocument();
    });

    it.skip("should validate country input", () => {
      const onSubmit = jest.fn();
      render(<UserForm onSubmit={onSubmit}></UserForm>);

      fillInput("Country", "Campuchia");
      const warningLabel = screen.getByText("Country can only be Viet Nam.");
      expect(warningLabel).toBeInTheDocument();
    });
  });
  describe("create user", () => {});
  describe("update user", () => {});
});

function fillInput(label, value) {
  fireEvent.change(screen.getByLabelText(label), { target: { value } });
}
