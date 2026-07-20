function Badge({ status }) {
  return (
    <span
      style={{
        backgroundColor: status === "Online" ? "green" : "red",
        color: "white",
        padding: "5px 10px",
        borderRadius: "5px",
      }}
    >
      {status}
    </span>
  );
}

export default Badge;