import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { useState, Suspense } from "react";
import { appRoutes } from "./routes";

function App() {
  const [username, setUsername] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const location = useLocation();
  return (
        <Suspense fallback={() => <h1>Loading...</h1>}>
          <Routes location={location}>
            {appRoutes.map((route) => {
              if (route.requiresAuth && !isLogged) {
                return (
                  <Route
                    key={route.path}
                    exact
                    path={route.path}
                    element={<Navigate replace to={"/login"} />}
                  />
                );
              } else {
                return (
                  <Route
                    key={route.path}
                    exact
                    path={route.path}
                    element={
                      <route.component
                        setIsLogged={setIsLogged}
                        setUsername={setUsername}
                        username={username}
                      />
                    }
                  />
                );
              }
            })}
          </Routes>
        </Suspense>
  );
}

export default App;