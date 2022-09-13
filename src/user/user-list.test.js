import { fireEvent, render, screen } from "@testing-library/react";
import { UserList } from "./user-list";

describe("users component", () => {
  describe("Render a user", () => {
    it.skip("should render a list", () => {
      render(<UserList />);
      const nameElement = screen.getByText(/Product list/i);
      expect(nameElement).toBeInTheDocument();
    });
  });

  describe("props", () => {
    describe("should render a list with correct amount of elements", () => {
      it.skip("empty", () => {
        render(<UserList data={[]} />);
        const nameElement = screen.queryByText(/First Name:/i);
        expect(nameElement).toBeNull();
      });

      it.skip("one", () => {
        render(<UserList data={[{ firstName: "John", lastName: "Doe" }]} />);
        expect(screen.getAllByText(/First Name: John/i)).toHaveLength(1);
        expect(screen.getAllByText(/Last Name: Doe/i)).toHaveLength(1);
      });

      it.skip("many", () => {
        const users = Array.from({ length: 20 }).map((_, index) => ({
          firstName: `First Name ${index}`,
          lastName: `First Name ${index}`,
        }));
        render(<UserList data={users} />);
        const nameElement = screen.getAllByText(/First Name:/i);
        expect(nameElement).toHaveLength(20);
      });
    });
  });

  describe("crud", () => {
    it.skip("update", () => {
      const onUpdate = jest.fn();
      render(
        <UserList
          data={[{ firstName: "John" }, { firstName: "Martin" }]}
          onUpdate={onUpdate}
        />
      );
      fireEvent(screen.queryByText("Update"[1]));
      expect(onUpdate.mock.calls).toHaveLength(1);
      const [firstCall] = onUpdate.mock.calls;
      const [param] = firstCall;
      expect(param).toHaveProperty("firstName", "Martin");
    });
    it.skip("delete", () => {
      const onDelete = jest.fn();
      render(
        <UserList
          data={[{ firstName: "John" }, { firstName: "Martin" }]}
          onDelete={onDelete}
        />
      );
      fireEvent(screen.queryByText("Update"[0]));
      expect(onDelete.mock.calls).toHaveLength(0);
      const [firstCall] = onDelete.mock.calls;
      const [param] = firstCall;
      expect(param).toHaveProperty("firstName", "John");
    });

    it.skip("add to cart", () => {
      const onAddToCart = jest.fn();
      render(
        <UserList
          data={[{ firstName: "John" }, { firstName: "Martin" }]}
          onAddToCart={onAddToCart}
        />
      );
      fireEvent(screen.queryByText("Add to cart"[1]));
      expect(onAddToCart.mock.calls).toHaveLength(1);
      const [firstCall] = onAddToCart.mock.calls;
      const [param] = firstCall;
      expect(param).toHaveProperty("firstName", "Martin");
    });
  });
});
