function Avatar({ name, image }) {
  return (
    <div>
      <img
        src={image}
        alt={name}
        width="100"
        height="100"
      />
      <h3>{name}</h3>
    </div>
  );
}

export default Avatar;