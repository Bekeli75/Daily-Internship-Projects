import Card from "./components/Card";

function App() {
  const users = [
    {
      id: 1,
      name: "Bereket",
      image: "https://i.pravatar.cc/100?img=1",
      status: "Online",
    },
    {
      id: 2,
      name: "John",
      image: "https://i.pravatar.cc/100?img=2",
      status: "Offline",
    },
    {
      id: 3,
      name: "Sara",
      image: "https://i.pravatar.cc/100?img=3",
      status: "Online",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        flexWrap: "wrap",
        marginTop: "40px",
      }}
    >
      {users.map((user) => (
        <Card
          key={user.id}
          name={user.name}
          image={user.image}
          status={user.status}
        />
      ))}
    </div>
  );
}

export default App;