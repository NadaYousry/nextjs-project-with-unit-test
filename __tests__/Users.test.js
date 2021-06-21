import { render, screen, waitFor, cleanup } from "@testing-library/react";
import axios from "axios";

import Users from "../pages/Users";

jest.mock("axios");
jest.mock("next/router", () => ({
  useRouter: () => ({
    pathname: "/Users",
  }),
}));
const fakeUsers = [
  {
    id: 1,
    name: "Test User 1",
    phone: "testuser1",
  },
  {
    id: 2,
    name: "Test User 2",
    phone: "testuser2",
  },
];

describe("checking users page data", () => {
  jest.mock("axios");
  afterEach(cleanup);
  it("fetch and display data", async () => {
    axios.get.mockResolvedValue({ data: fakeUsers });
    render(<Users />);
    const userList = await waitFor(() => screen.findAllByTestId("data"));
    expect(userList).toHaveLength(2);
  });
});
