import BreadCrumbs from '../../components/Atoms/Navigation/breadcumbs/breadcumbs';

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

function App() {
  
  return (
    <>
  <BreadCrumbs items={breadcrumbData} />
    </>
  )
}


export default App;
