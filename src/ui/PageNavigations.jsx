import { NavLink } from 'react-router-dom';

function StyledNavLink({ linkTo, linkText }) {
  return (
    <li className="mb-4">
      <NavLink
        to={linkTo}
        className={({ isActive, isPending }) =>
          [
            isPending ? 'pending' : '',
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

function PageNavigations() {
  return (
    <ul>
      <StyledNavLink linkTo="/home" linkText="Home" />
      <StyledNavLink linkTo="/about" linkText="About" />
      <StyledNavLink linkTo="/education" linkText="Education" />
      <StyledNavLink linkTo="/workexperience" linkText="Work Experience" />
      <StyledNavLink linkTo="/mysampleprojects" linkText="My Sample Projects" />
      <StyledNavLink
        linkTo="/languageandskills"
        linkText="Foreign Language &amp; Skills"
      />
      <StyledNavLink linkTo="/achievements" linkText="Achievements" />
      <StyledNavLink linkTo="/certificates" linkText="Certificates" />
      <StyledNavLink
        linkTo="/udemycertificates"
        linkText="Udemy Certificates"
      />
      <StyledNavLink linkTo="/references" linkText="References" />
      <StyledNavLink
        linkTo="/personelinfoandcontact"
        linkText="Personal Information &amp; Contact"
      />
    </ul>
  );
}

export default PageNavigations;
