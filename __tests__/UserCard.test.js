import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserCard from "../components/UserCard/UserCard";
jest.mock("next/router", () => ({
  useRouter: () => ({
    pathname: "/Users/[id]",
  }),
}));
describe("checking user card switcher", () => {
  it("changing switcher", async () => {
    const { getByTestId } = render(
      <UserCard
        data={{
          id: 2,
          name: "Test User 2",
          phone: "testuser2",
        }}
        link={false}
      />
    );
    const switcher = getByTestId("switcher");
    expect(switcher).toBeChecked();
    expect(screen.getByText(/Active User/i)).toBeInTheDocument();
    fireEvent.click(switcher);
    await waitFor(() => {
      expect(switcher).not.toBeChecked();
      expect(screen.getByText(/Inactive User/i)).toBeInTheDocument();
    });
  });
});
