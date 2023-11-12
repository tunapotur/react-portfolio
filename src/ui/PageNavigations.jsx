import { NavLink } from 'react-router-dom';
import rootList from '../data/rootList';

function PageNavigations() {
  return (
    <ul>
      {rootList.map((el) => (
        <StyledNavLink key={el.id} linkTo={el.pathName} linkText={el.text} />
      ))}
    </ul>
  );
}

function StyledNavLink({ linkTo, linkText }) {
  return (
    <li className="mb-4">
      <NavLink
        to={`${linkTo}`}
        className={({ isActive, isPending }) =>
          [
            isPending ? 'loading...' : '',
            isActive ? 'text-amber-700' : '',
            'transition-colors hover:text-amber-700',
          ].join(' ')
        }
      >
        <span>{linkText}</span>
      </NavLink>
    </li>
  );
}

export default PageNavigations;
