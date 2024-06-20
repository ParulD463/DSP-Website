import Link from "next/link";

interface LinkProperties {
  LinkHref: string;
  LinkName: string;
}

interface LinksObject {
  [key: string]: LinkProperties[];
}

const NavLinks: LinksObject[] = [
  {
    About: [
      {
        LinkName: "Our Chapter",
        LinkHref: "/ourChapter",
      },
      {
        LinkName: "History",
        LinkHref: "/history",
      },
    ],
  },
  {
    Brothers: [
      {
        LinkName: "ExecutiveBoard",
        LinkHref: "/ExecutiveBoard",
      },
      {
        LinkName: "Actives",
        LinkHref: "/Actives",
      },
      // TODO: add classes
    ],
  },
];

interface NavItemProps {
  idName: string;
  buttonName: string;
  links: LinkProperties[];
}

const NavItem = ({ idName, buttonName, links }: NavItemProps) => {
  return (
    <div>
      <button
        data-dropdown-toggle={idName}
        data-dropdown-trigger="hover"
        className="mb-3 mt-4 hover:bg-transparent-800 bg-opacity-0"
        type="button"
      >
        {buttonName}
      </button>
      <div
        id={idName}
        className=" z-20 hidden bg-transparent divide-y divide-transparent-100 rounded-sm shadow w-44 dark:bg-transparent-700"
      >
        {links.map((_link) => (
          <Link
            key={_link.LinkName}
            href={_link.LinkHref}
            className="block px-4 py-2 hover:bg-black-100 dark:hover:bg-grey dark:hover:text-yellow hover:text-yellow-500"
          >
            {_link.LinkName}
          </Link>
        ))}
      </div>
    </div>
  );
};

export const Navbar = () => {
  return (
    <div className="grid grid-cols-5 gap-x-[19px] ml-96">
      <NavItem
        buttonName="About"
        idName="aboutDropdownHoverButton"
        links={NavLinks[0].About}
      />
      <NavItem
        buttonName="Brothers"
        idName="brothersDropdownHoverButton"
        links={NavLinks[1].Brothers}
      />
      <div>
        <button
          id="careersDropdownHoverButton"
          data-dropdown-toggle="careers_dropdownHover"
          data-dropdown-trigger="hover"
          className=" ml-86 mb-3 mt-4 hover:bg-transparent-800 bg-opacity-0"
          type="button"
        >
          Careers{" "}
        </button>
        <div
          id="careers_dropdownHover"
          className="z-20 hidden bg-transparent divide-y divide-transparent-100 rounded-sm shadow w-44 dark:bg-transparent-700"
        >
          <Link
            href="/alumniReflections"
            className="block px-4 py-2 hover:bg-black-100 dark:hover:bg-grey dark:hover:text-yellow hover:text-yellow-500"
          >
            Alumni Reflections
          </Link>
          <Link
            href="/fullTimeAndInternships"
            className="block px-4 py-2 hover:bg-black-100 dark:hover:bg-grey dark:hover:text-yellow hover:text-yellow-500"
          >
            FullTime/Internships
          </Link>
        </div>
      </div>

      <div>
        <button
          id="recruitmentDropdownHoverButton"
          data-dropdown-toggle="recruitment_dropdownHover"
          data-dropdown-trigger="hover"
          className=" ml-86 mb-3 mt-4 hover:bg-transparent-800 bg-opacity-0"
          type="button"
        >
          Recruitment{" "}
        </button>
        <div
          id="recruitment_dropdownHover"
          className="z-20 hidden bg-transparent divide-y divide-transparent-100 rounded-sm shadow w-44 dark:bg-transparent-700"
        >
          <Link
            href="/Recruitment"
            className="block px-4 py-2 hover:bg-black-100 dark:hover:bg-grey dark:hover:text-yellow hover:text-yellow-500"
          >
            FAQ
          </Link>
        </div>
      </div>

      <div>
        <Link href="/photos">
          <button
            id="photosButton"
            className=" ml-86 mb-3 mt-4 hover:bg-transparent-800 bg-opacity-0"
            type="button"
          >
            Photos
          </button>
        </Link>
      </div>
    </div>
  );
};
