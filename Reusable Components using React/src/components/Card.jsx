import Avatar from "./Avatar";
import Badge from "./Badge";

function Card({ name, image, status }) {
  function handleClick() {
    alert(`Hello ${name}!`);
  }

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        margin: "10px",
        width: "220px",
        textAlign: "center",
        borderRadius: "10px",
      }}
    >
      <Avatar
        name={name}
        image={image}
      />

      <Badge status={status} />

      <br />
      <br />

      <button onClick={handleClick}>
        Say Hello
      </button>
    </div>
  );
}

export default Card;