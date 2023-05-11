//  icons
import {
  FiFacebook,
  FiInstagram,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';


// projects images
import Project1 from './assets/img/projects/sample molding.jpeg';
import Project2 from './assets/img/projects/sample karet.jpeg';
import Project3 from './assets/img/projects/sample karet-2.jpeg';
import Sample from './assets/img/projects/sample-matres.jpg'
import Sample2 from './assets/img/projects/sample-matres2.jpg'
import Sample3 from './assets/img/projects/sample-matres3.jpg'
import Sample4 from './assets/img/projects/sample-sparepart.jpg'
import Sample5 from './assets/img/projects/sample-sparepart2.jpg'


// testimonial images
import TestiImage1 from './assets/img/testimonials/molding.jpg';
import TestiImage2 from './assets/img/testimonials/karet.jpg';
import TestiImage3 from './assets/img/testimonials/spare-part.jpg';

// navigation
export const navigation = [
  {
    name: 'Home',
    href: 'home',
  },
  {
    name: 'Tentang kami',
    href: 'tentangkami',
  },
  {
    name: 'Layanan',
    href: 'layanan',
  },
  {
    name: 'Sample',
    href: 'sample',
  },
];

// social
export const social = [
  {
    icon: <FiFacebook />,
    href: '',
  },
  {
    icon: <FiInstagram />,
    href: '',
  },
  
];



// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'Molding Bosing Toyota',
    category: 'Molding',
  },
  {
    id: '2',
    image: Project2,
    name: 'Adjuster',
    category: 'Produksi',
  },
  {
    id: '3',
    image: Project3,
    name: 'Berbagai Jenis Adjuster',
    category: 'Produksi',
  },
  {
    id: '4',
    image: Sample,
    name: 'Molding Engine Mouting',
    category: 'Molding',
  },
  {
    id: '5',
    image: Sample2,
    name: 'Molding Engine Mouting',
    category: 'Molding',
  },
  {
    id: '6',
    image: Sample3,
    name: 'Molding Adjuster',
    category: 'Molding',
  },
  {
    id: '7',
    image: Sample5,
    name: 'Pendingin Mobil Nissan',
    category: 'Spare part',
  },
  {
    id: '8',
    image: Sample4,
    name: 'Bosing Mesin giling karet',
    category: 'Spare part',
  },
  
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'Molding',
  },
  {
    name: 'Produksi',
  },
  {
    name: 'Spare Part',
  },
];




// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorName:
      'Pembuatan Matres/Molding',
    authorText: 'Membuat molding/matres sesuai keinginan client ',
  },
  {
    authorImg: TestiImage2,
    authorName:
      'Produksi Karet dan Plastik',
    authorText: 'Memproduksi barang-barang karet dan plastik untuk barang teknik',
  },
  {
    authorImg: TestiImage3,
    authorName:
      'Pembuatan Spare part',
    authorText: 'Membuat spare part mesin produksi',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at hello@youremail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Bucharest, Romania',
    description: 'Serving clients worldwide',
  },
];

// informasi 
export const informasi = [
  {
    title: 'TENTANG KAMI'
  },
  {
    title: 'LAYANAN KAMI'
  },
  {
    title: 'INFORMASI'
  },
  {
    title: 'HUBUNGI KAMI'
  },
]