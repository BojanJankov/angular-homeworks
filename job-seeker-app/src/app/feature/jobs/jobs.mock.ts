import { Job } from './models/job.model';

export const jobsMock: Job[] = [
  {
    id: 1,
    company: 'Tech Innovators Inc.',
    expires: '2024-09-15',
    position: 'Software Engineer',
    startingSalary: 90000,
    workType: 'remote',
    location: 'San Francisco, CA',
    country: 'USA',
    qualifications:
      "Bachelor's degree in Computer Science or related field, 3+ years of experience in software development.",
    description:
      'Join our dynamic team to develop cutting-edge software solutions. Work remotely and enjoy flexible hours.',
    isApplied: false,
  },
  {
    id: 2,
    company: 'GreenFuture Ltd.',
    expires: '2024-10-01',
    position: 'Environmental Consultant',
    startingSalary: 75000,
    workType: 'hybrid',
    location: 'Austin, TX',
    country: 'USA',
    qualifications:
      "Master's degree in Environmental Science or related field, experience in sustainability projects.",
    description:
      'Help us create innovative solutions for environmental challenges. Mix of remote and onsite work.',
    isApplied: true,
  },
  {
    id: 3,
    company: 'FinTech Solutions',
    expires: '2024-08-30',
    position: 'Financial Analyst',
    startingSalary: 80000,
    workType: 'onsite',
    location: 'New York, NY',
    country: 'USA',
    qualifications:
      "Bachelor's degree in Finance or Economics, proficiency in Excel and financial modeling.",
    description:
      'Analyze financial data to support business decisions. Position requires onsite presence in our New York office.',
    isApplied: false,
  },
  {
    id: 4,
    company: 'HealthFirst',
    expires: '2024-09-20',
    position: 'Healthcare Administrator',
    startingSalary: 85000,
    workType: 'hybrid',
    location: 'Chicago, IL',
    country: 'USA',
    qualifications:
      "Bachelor's degree in Healthcare Administration, experience with medical office management.",
    description:
      'Oversee healthcare facility operations with a mix of remote and onsite duties. Improve patient care and administrative processes.',
    isApplied: true,
  },
  {
    id: 5,
    company: 'EduTech Solutions',
    expires: '2024-10-10',
    position: 'Instructional Designer',
    startingSalary: 70000,
    workType: 'remote',
    location: 'Boston, MA',
    country: 'USA',
    qualifications:
      "Bachelor's degree in Instructional Design or related field, experience in e-learning development.",
    description:
      'Create engaging educational content and online courses. Fully remote position with flexible working hours.',
    isApplied: false,
  },
  {
    id: 6,
    company: 'Creative Minds Agency',
    expires: '2024-09-25',
    position: 'Marketing Manager',
    startingSalary: 95000,
    workType: 'onsite',
    location: 'Los Angeles, CA',
    country: 'USA',
    qualifications:
      "Bachelor's degree in Marketing or Business, proven track record in managing marketing campaigns.",
    description:
      'Lead marketing strategies and campaigns to drive growth. Full-time onsite role in our Los Angeles office.',
    isApplied: false,
  },
  {
    id: 7,
    company: 'CyberGuard Systems',
    expires: '2024-10-05',
    position: 'Cybersecurity Specialist',
    startingSalary: 105000,
    workType: 'remote',
    location: 'Seattle, WA',
    country: 'USA',
    qualifications:
      "Bachelor's degree in Cybersecurity or related field, certifications such as CISSP or CISM.",
    description:
      'Protect our digital assets and ensure data security. Remote work with occasional travel to headquarters.',
    isApplied: true,
  },
  {
    id: 8,
    company: 'Global Trade Partners',
    expires: '2024-09-12',
    position: 'Supply Chain Coordinator',
    startingSalary: 72000,
    workType: 'hybrid',
    location: 'Denver, CO',
    country: 'USA',
    qualifications:
      "Bachelor's degree in Supply Chain Management, experience with logistics and inventory systems.",
    description:
      'Manage supply chain operations and optimize logistics. Role includes both remote and onsite responsibilities.',
    isApplied: false,
  },
  {
    id: 9,
    company: 'Innovate Labs',
    expires: '2024-10-15',
    position: 'Product Manager',
    startingSalary: 100000,
    workType: 'remote',
    location: 'Portland, OR',
    country: 'USA',
    qualifications:
      "Bachelor's degree in Business or Engineering, experience in product development and management.",
    description:
      'Lead product development from concept to launch. Remote position with flexible working arrangements.',
    isApplied: true,
  },
  {
    id: 10,
    company: 'TechGenius',
    expires: '2024-09-30',
    position: 'Data Scientist',
    startingSalary: 92000,
    workType: 'onsite',
    location: 'San Diego, CA',
    country: 'USA',
    qualifications:
      "Master's degree in Data Science or related field, experience with machine learning algorithms.",
    description:
      'Analyze complex datasets and provide insights to drive business decisions. Onsite role in our San Diego office.',
    isApplied: false,
  },
  {
    id: 11,
    company: 'FutureWorks',
    expires: '2024-08-31',
    position: 'UX/UI Designer',
    startingSalary: 78000,
    workType: 'hybrid',
    location: 'Philadelphia, PA',
    country: 'USA',
    qualifications:
      "Bachelor's degree in Design or related field, strong portfolio of UX/UI work.",
    description:
      'Design intuitive and engaging user interfaces. Hybrid role with both remote and onsite work in Philadelphia.',
    isApplied: true,
  },
];
