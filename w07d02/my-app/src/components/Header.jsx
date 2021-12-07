const Header = (props) => {
  console.log(props);
  return (
    <div>
      <h2>This is the header</h2>
      <h2>You are logged in as: {props.username}</h2>

      {props.children}
    </div>
  );
};

export default Header;
