import BreadCrumbs from '../../components/Atoms/Navigation/breadcumbs/breadcumbs';
import Link from '../../components/Atoms/Navigation/link/link';
import Menu from '../../components/Atoms/Navigation/menu/menu';
import Pagination from '../../components/Atoms/Navigation/pagination/pagination';
import NavBar from '../../components/Atoms/Navigation/navbar/navbar';

const breadcrumbData = [
  {
    title: 'Home',
    iconLink: 'http://www.w3.org/2000/svg',
  },
  {
    title: 'Documents',
    iconLink: 'http://www.w3.org/2000/svg',
  },
  {
    title: 'Add Document',
    iconLink: 'http://www.w3.org/2000/svg',
  },
];

const linkText = 'hola'

const menuData = [
  {
    title: 'Item 1',
    iconLink: 'http://www.w3.org/2000/svg',
    d: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
  },
  {
    title: 'Item 2',
    iconLink: 'http://www.w3.org/2000/svg',
    d: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    title: 'Item 3',
    iconLink: 'http://www.w3.org/2000/svg',
    d: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
  },
]

function App() {
  
  return (
    <>
      <BreadCrumbs items={breadcrumbData} />
      <Link title={linkText} />
      <Menu items={menuData} />
      <Pagination numPages={5} actualPage={1} />
      <NavBar/>
    </>
  )
}


export default App;
