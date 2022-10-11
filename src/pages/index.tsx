/**
 * This is a Next.js page.
 */
import { trpc } from "../utils/trpc";

export default function IndexPage() {
  // 💡 Tip: CMD+Click (or CTRL+Click) on `greeting` to go to the server definition
  const result = trpc.greeting.useQuery({ name: "client" });
  const userReq1 = trpc.getUser.useQuery({ id: "abc" });
  const userReq2 = trpc.getUser.useQuery({ id: "cde" });
  const userReq3 = trpc.getUser.useQuery({ id: "fgh" });
  const userReq4 = trpc.getUser.useQuery({ id: "ijk" });
  const userReq5 = trpc.getUser.useQuery({ id: "lmn" });

  if (
    !result.data ||
    !userReq1.data ||
    !userReq2.data ||
    !userReq3.data ||
    !userReq4.data ||
    !userReq5.data
  ) {
    return (
      <div style={styles}>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div style={styles}>
      {/**
       * The type is defined and can be autocompleted
       * 💡 Tip: Hover over `data` to see the result type
       * 💡 Tip: CMD+Click (or CTRL+Click) on `text` to go to the server definition
       * 💡 Tip: Secondary click on `text` and "Rename Symbol" to rename it both on the client & server
       */}
      <h1>{result.data.text}</h1>
      <p>{userReq1.data.id}</p>
      <p>{userReq2.data.id}</p>
      <p>{userReq3.data.id}</p>
      <p>{userReq4.data.id}</p>
      <p>{userReq5.data.id}</p>
    </div>
  );
}

const styles = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
