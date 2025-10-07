import Footer from "@/components/Footer";
import NavSideBar from "@/components/NavSidebar";
import Title from "@/components/Title";

interface Links {
  label: string,
  href: string
}

export default function Home() {

  const sidebarItems: Links[] = [
    { label: 'SOFTWARE PROJECTS.', href: '/software'},
    { label: 'ART PROJECTS.', href: '/art'},
    { label: 'MORE ABOUT.', href: '/more'},
    { label: 'RESUME.', href: '/resume'}
  ]

  const socialsLinks: Links[] = [
    { label: 'LinkedIn', href: 'http://linkedin.com/in/krisfragata'},
    { label: 'Github', href: 'http://github.com/krisfragata'},
    { label: 'Email', href:'kristinnefragata@outlook.com'},
  ]

  return (
    <div className="home">
      <div className="left">
        <Title/>
        <Footer links={socialsLinks}/>
      </div>
      <NavSideBar links={sidebarItems}/>
    </div>
  );
}
