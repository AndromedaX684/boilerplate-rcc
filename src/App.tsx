import { useState } from "react";
import { SignIn, UserButton } from "@clerk/clerk-react";
import {
  Authenticated,
  Unauthenticated,
  AuthLoading,
  useQuery,
} from "convex/react";
import { api } from "../convex/_generated/api";
import { Button } from "./components/ui/button";
import { Spinner } from "./components/ui/spinner";

function App() {
  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <main>
      <Unauthenticated>
        <Button onClick={() => setShowSignIn(true)}>Login</Button>
        {showSignIn && <SignIn />}
      </Unauthenticated>
      <Authenticated>
        <UserButton />
        <Content />
      </Authenticated>
      <AuthLoading>
        <Spinner />
      </AuthLoading>
    </main>
  );
}

function Content() {
  const tasks = useQuery(api.tasks.get);
  return (
    <div className="App text-3xl">
      {tasks?.map(({ _id, text }) => (
        <div key={_id}>{text}</div>
      ))}
    </div>
  );
}

export default App;
