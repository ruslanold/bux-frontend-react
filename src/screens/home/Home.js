import { useState, useEffect } from "react";

const Home = () => {

  const [state, setState] = useState({
    users: []
  })
  

  useEffect(() => {

  }, []);

  return (
    <div>
      Home
    {console.log(state.users, "users")}
      {state.users.map((user) => (
        <div>
          {user.name}
        </div>
        )
      )}
    </div>
  )
}
export default Home;