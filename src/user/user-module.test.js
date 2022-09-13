import { fireEvent, render, screen } from "@testing-library/react";
import { UserModule } from "./user-module";

describe("user module", () => {
  const sample1 = {
    firstName: "Tri",
    lastName: "Pham",
    workAt: "mgm",
    school: "DTU",
    city: "Da Nang",
    country: "Viet Nam",
    address: "DTU",
  };
  const sample2 = {
    firstName: "Dung",
    lastName: "Le",
    workAt: "mgm",
    school: "DTU",
    city: "Da Nang",
    country: "Viet Nam",
    address: "DTU",
  };
  describe("create", () => {
    it.skip("should create a user", () => {
      render(<UserModule></UserModule>);

      fillInput("First Name", sample1.firstName);
      fillInput("Last Name", sample1.lastName);
      fillInput("Work at", sample1.workAt);
      fillInput("School", sample1.school);
      fillInput("City", sample1.city);
      fillInput("Country", sample1.country);
      fillInput("Address", sample1.address);

      fireEvent.click(screen.getByText("Submit"));

      expect(screen.getByText(sample1.firstName)).toBeInTheDocument();

      fillInput("First Name", sample2.firstName);
      fillInput("Last Name", sample2.lastName);
      fillInput("Work at", sample2.workAt);
      fillInput("School", sample2.school);
      fillInput("City", sample2.city);
      fillInput("Country", sample2.country);
      fillInput("Address", sample2.address);

      expect(screen.getByText(sample2.firstName)).toBeInTheDocument();
    });
  });

  describe("update", () => {
    it.skip("should update a user's price", () => {
      render(<UserModule initialProducts={[sample1]}></UserModule>);

      fireEvent.click(screen.queryAllByText("Update")[0]);

      expect(screen.getByLabelText("Work at")).toHaveProperty("value", "mgm");

      fillInput("Work at", "DTU");

      expect(screen.getByLabelText("Work at")).toHaveProperty("value", "DTU");

      fireEvent.click(screen.getByText("Submit"));

      expect(screen.getByLabelText("Work at")).toHaveProperty("value", "");

      expect(screen.getByText("Work at: DTU")).toBeInTheDocument();
    });
  });

  describe("delete", () => {
    it.skip("should delete a user", () => {
      render(<UserModule initialProducts={[sample1]}></UserModule>);

      expect(screen.queryAllByText("First name: Tri")).toHaveLength(1);

      fireEvent.click(screen.queryAllByText("Delete")[0]);

      expect(screen.queryAllByText("First name: Tri")).toHaveLength(0);
    });
  });
});

function fillInput(label, value) {
  fireEvent.change(screen.getByLabelText(label), { target: { value } });
}
