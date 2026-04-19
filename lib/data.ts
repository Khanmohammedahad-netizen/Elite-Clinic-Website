export interface Doctor {
  id: string;
  name: string;
  title: string;
  credentials: string;
  bio: string;
  specialties: string[];
  initials: string;
  isPlaceholder?: boolean;
}

export const DOCTORS: Doctor[] = [
  {
    id: 'adnan',
    name: 'Dr. Adnan',
    title: 'MBBS, Diploma in Emergency Medicine',
    credentials: 'Royal College of Physicians, London',
    bio: 'Dr. Adnan brings clinical expertise across general medicine and emergency care, with training from the Royal College of Physicians, London. Known for his patient-first approach, he ensures every consultation is thorough, unhurried, and focused on clear communication.',
    specialties: ['General Medicine', 'Diabetes Care', 'Hypertension', 'Thyroid'],
    initials: 'Dr. A',
  },
  {
    id: 'maimoona',
    name: 'Dr. Maimoona',
    title: 'MBBS, DO, DNB',
    credentials: 'Cornea, Cataract and LASIK Surgeon',
    bio: 'Dr. Maimoona is a qualified ophthalmologist specializing in cornea, cataract, and LASIK surgery. She leads Pinnacle Eye Care, the clinic\'s dedicated eye care practice, bringing precision and care to every procedure.',
    specialties: ['LASIK', 'Cataract', 'Cornea', 'Eye Exams'],
    initials: 'Dr. M',
  },
]
