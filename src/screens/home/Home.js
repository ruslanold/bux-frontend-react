import { useState, useEffect } from "react";

export const Home = () => {

  const [state, setState] = useState({
    users: []
  })
  

  useEffect(() => {

  }, []);

  return (
    <div>
      Home
      {state.users.map((user) => (
        <div>
          {user.name}
        </div>
        )
      )}
    </div>
  )
}