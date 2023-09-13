import { Link } from 'react-router-dom';
const Menu = () => {
  return (
    <div>
      <Link to="http://localhost:3000/">Hlavni stranka</Link>
      <Link to="http://localhost:3000/add-material"> Pridani materialu</Link>
    </div>
  );
};
export default Menu;
