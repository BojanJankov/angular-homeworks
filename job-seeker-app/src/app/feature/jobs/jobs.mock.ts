import { Job } from './models/job.model';

export const jobsMock: Job[] = [
  {
    id: 1,
    company: {
      logo: 'https://media.licdn.com/dms/image/C510BAQGyrjejcc1lAg/company-logo_200_200/0/1630614328507?e=2147483647&v=beta&t=OpkdaFKq2JjzyqxZdzryHedaKduCYj9UMRAyYNautvc',
      name: 'Tech Innovators Inc.',
      employees: '150',
      description:
        'A leading company in tech innovations, focusing on cutting-edge solutions for the future.',
      state: 'San Francisco',
      website: 'https://techinnovators.com',
    },
    expires: '2024-09-30T23:59:59Z',
    position: 'Senior Software Engineer',
    startingSalary: 120000,
    workType: 'hybrid',
    location: 'San Francisco, CA',
    country: 'USA',
    qualifications:
      '5+ years of experience in software development, proficiency in JavaScript and Python, strong problem-solving skills.',
    description:
      "Join our dynamic team as a Senior Software Engineer where you'll work on exciting projects involving the latest technologies and innovations. You'll collaborate with a talented team to develop cutting-edge solutions and drive our products to new heights.",
    isApplied: false,
  },
  {
    id: 2,
    company: {
      logo: 'https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/ghkyc0ruelu0pe8yndeq',
      name: 'GreenTech Solutions',
      employees: '300',
      description:
        'Pioneering sustainable technology solutions for a greener future.',
      state: 'California',
      website: 'https://greentechsolutions.com',
    },
    expires: '2024-10-15T23:59:59Z',
    position: 'Environmental Data Analyst',
    startingSalary: 85000,
    workType: 'remote',
    location: 'Remote',
    country: 'USA',
    qualifications:
      'Degree in Environmental Science or related field, experience with data analysis tools, passion for sustainability.',
    description:
      'Analyze environmental data to support our green initiatives and develop strategies to improve our ecological footprint.',
    isApplied: false,
  },
  {
    id: 3,
    company: {
      logo: 'https://www.snapswap.eu/uploads/1/2/6/3/12630235/button-fintech-100_orig.png',
      name: 'FinTech Dynamics',
      employees: '500',
      description:
        'Innovating financial solutions with cutting-edge technology to empower businesses and individuals.',
      state: 'New York',
      website: 'https://fintechdynamics.com',
    },
    expires: '2024-11-01T23:59:59Z',
    position: 'Blockchain Developer',
    startingSalary: 140000,
    workType: 'onsite',
    location: 'New York, NY',
    country: 'USA',
    qualifications:
      'Experience with blockchain technology, strong knowledge of cryptography, proficiency in Solidity and smart contracts.',
    description:
      'Develop and implement blockchain solutions to enhance our financial products and services, working on the latest in blockchain technology.',
    isApplied: false,
  },
  {
    id: 4,
    company: {
      logo: 'https://www.ifhafund.com/wp-content/uploads/2019/10/aar-hc-logo.png',
      name: 'HealthCare Plus',
      employees: '200',
      description:
        'Providing advanced healthcare solutions and services with a focus on patient care and technology.',
      state: 'Massachusetts',
      website: 'https://healthcareplus.com',
    },
    expires: '2024-09-20T23:59:59Z',
    position: 'Clinical Data Manager',
    startingSalary: 95000,
    workType: 'hybrid',
    location: 'Boston, MA',
    country: 'USA',
    qualifications:
      'Degree in Health Informatics or related field, experience with clinical data management, strong analytical skills.',
    description:
      'Oversee the management of clinical data, ensuring accuracy and compliance with regulations, while supporting healthcare professionals.',
    isApplied: false,
  },
  {
    id: 5,
    company: {
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpKgAECRdqB81uLjOfk-6l69Jsx8wDn3WLgg&s',
      name: 'Design Studios',
      employees: '50',
      description:
        'Creative design agency specializing in innovative solutions for digital and print media.',
      state: 'California',
      website: 'https://designstudios.com',
    },
    expires: '2024-08-31T23:59:59Z',
    position: 'Graphic Designer',
    startingSalary: 70000,
    workType: 'onsite',
    location: 'Los Angeles, CA',
    country: 'USA',
    qualifications:
      'Proficiency in Adobe Creative Suite, strong portfolio, creativity, and attention to detail.',
    description:
      'Create visually compelling designs for various media, including digital ads, print materials, and branding projects.',
    isApplied: false,
  },
  {
    id: 6,
    company: {
      logo: 'https://media.licdn.com/dms/image/C4D0BAQHnq_V7gHkyCQ/company-logo_200_200/0/1630569065309?e=2147483647&v=beta&t=0ni4p7pGUP4_GxCoxBIdoCCNwS5L9udsH9Ds171Jjqk',
      name: 'Logistics Pro',
      employees: '400',
      description:
        'Optimizing logistics and supply chain operations with advanced technology and expert solutions.',
      state: 'Remote',
      website: 'https://logisticspro.com',
    },
    expires: '2024-12-01T23:59:59Z',
    position: 'Supply Chain Analyst',
    startingSalary: 90000,
    workType: 'remote',
    location: 'Remote',
    country: 'USA',
    qualifications:
      'Experience in supply chain management, strong analytical and problem-solving skills, proficiency in ERP systems.',
    description:
      'Analyze and improve supply chain processes, ensuring efficiency and effectiveness in logistics operations.',
    isApplied: false,
  },
  {
    id: 7,
    company: {
      logo: 'https://company.overdrive.com/wp-content/uploads/2024/07/logo.png',
      name: 'EduTech Corp.',
      employees: '120',
      description:
        'Innovating education with technology to create engaging and effective learning experiences.',
      state: 'Illinois',
      website: 'https://edutechcorp.com',
    },
    expires: '2024-10-30T23:59:59Z',
    position: 'Educational Software Developer',
    startingSalary: 110000,
    workType: 'hybrid',
    location: 'Chicago, IL',
    country: 'USA',
    qualifications:
      'Experience in educational software development, proficiency in JavaScript and educational technologies, strong problem-solving skills.',
    description:
      'Develop software solutions aimed at enhancing educational experiences and improving learning outcomes for students.',
    isApplied: false,
  },
  {
    id: 8,
    company: {
      logo: 'https://seeklogo.com/images/M/my-travel-expert-logo-034DDA02DD-seeklogo.com.gif',
      name: 'Travel Experts',
      employees: '80',
      description:
        'Providing exceptional travel experiences with personalized services and expert advice.',
      state: 'Florida',
      website: 'https://travelexperts.com',
    },
    expires: '2024-11-15T23:59:59Z',
    position: 'Travel Consultant',
    startingSalary: 75000,
    workType: 'onsite',
    location: 'Miami, FL',
    country: 'USA',
    qualifications:
      'Experience in travel consulting, strong knowledge of travel destinations and booking systems, excellent communication skills.',
    description:
      'Assist clients with planning and booking their travel arrangements, offering expert advice and personalized travel solutions.',
    isApplied: false,
  },
  {
    id: 9,
    company: {
      logo: 'https://cerc.howard.edu/wp-content/uploads/2024/07/Cybersecurity-logo.png',
      name: 'CyberSecure Inc.',
      employees: '250',
      description:
        'Leading the way in cybersecurity with innovative solutions to protect data and systems.',
      state: 'Remote',
      website: 'https://cybersecureinc.com',
    },
    expires: '2024-12-15T23:59:59Z',
    position: 'Cybersecurity Analyst',
    startingSalary: 130000,
    workType: 'remote',
    location: 'Remote',
    country: 'USA',
    qualifications:
      'Experience in cybersecurity, knowledge of network security protocols, proficiency in security tools and technologies.',
    description:
      'Monitor and protect our network and systems from cyber threats, ensuring data security and compliance with security regulations.',
    isApplied: false,
  },
  {
    id: 10,
    company: {
      logo: 'https://i0.wp.com/elitejobstoday.com/wp-content/uploads/2020/06/Nation-Media-Group.jpg?w=618&ssl=1',
      name: 'Media House',
      employees: '180',
      description:
        'Creating and distributing compelling media content across various platforms.',
      state: 'Washington',
      website: 'https://mediahouse.com',
    },
    expires: '2024-09-10T23:59:59Z',
    position: 'Content Writer',
    startingSalary: 65000,
    workType: 'hybrid',
    location: 'Seattle, WA',
    country: 'USA',
    qualifications:
      'Strong writing and editing skills, experience in content creation, familiarity with SEO practices.',
    description:
      'Produce high-quality written content for media platforms, including articles, blogs, and marketing materials.',
    isApplied: false,
  },
  {
    id: 11,
    company: {
      logo: 'https://smarthomesolutionsuae.com/wp-content/uploads/2024/04/SMART-HOME-LOGO-160x160.png',
      name: 'Smart Home Solutions',
      employees: '90',
      description:
        'Transforming homes with smart technology for improved convenience and efficiency.',
      state: 'Texas',
      website: 'https://smarthomesolutions.com',
    },
    expires: '2024-10-05T23:59:59Z',
    position: 'Home Automation Technician',
    startingSalary: 78000,
    workType: 'onsite',
    location: 'Austin, TX',
    country: 'USA',
    qualifications:
      'Experience with home automation systems, technical skills, and problem-solving abilities.',
    description:
      "Install and maintain smart home systems, ensuring that customers' homes are equipped with the latest in home automation technology.",
    isApplied: false,
  },
  {
    id: 12,
    company: {
      logo: 'https://www.keepme.ai/assets/testimonials/plus-fitness.png',
      name: 'Fitness Innovators',
      employees: '60',
      description:
        'Revolutionizing fitness with state-of-the-art equipment and personalized training solutions.',
      state: 'Colorado',
      website: 'https://fitnessinnovators.com',
    },
    expires: '2024-11-01T23:59:59Z',
    position: 'Personal Trainer',
    startingSalary: 70000,
    workType: 'onsite',
    location: 'Denver, CO',
    country: 'USA',
    qualifications:
      'Certified personal trainer, experience in fitness training, excellent communication skills.',
    description:
      'Provide personalized training sessions to clients, helping them achieve their fitness goals through tailored exercise programs.',
    isApplied: false,
  },
  {
    id: 13,
    company: {
      logo: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/112017/untitled-6_33.png?ytSHXxFx1NduIqXcPHGv6HNPvsoYLYZh&itok=JGi4eZah',
      name: 'Retail Vision',
      employees: '500',
      description:
        'Enhancing the retail experience with innovative technology and exceptional service.',
      state: 'Philadelphia',
      website: 'https://retailvision.com',
    },
    expires: '2024-09-25T23:59:59Z',
    position: 'Retail Manager',
    startingSalary: 85000,
    workType: 'hybrid',
    location: 'Philadelphia, PA',
    country: 'USA',
    qualifications:
      'Experience in retail management, strong leadership skills, excellent customer service skills.',
    description:
      'Manage retail operations, lead a team of associates, and ensure a high-quality shopping experience for customers.',
    isApplied: false,
  },
];
