export type SkillCategory = {
  title: string
  items: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming',
    items: ['Python', 'SQL'],
  },
  {
    title: 'Data Engineering',
    items: [
      'ETL / ELT',
      'Data Pipelines',
      'Data Cleaning',
      'Data Transformation',
      'Data Modeling',
    ],
  },
  {
    title: 'Databases',
    items: ['MySQL',"PostgreSQL"],
  },
  {
    title: 'Big Data',
    items: ['Apache Spark', 'PySpark'],
  },
  {
    title: 'Platforms',
    items: ['Databricks',"Airflow"],
  },
  {
    title: 'Data / APIs',
    items: ['Pandas', 'REST APIs', 'JSON','FreeAPI'],
  },
  {
    title: 'Developer Tools',
    items: ['Git', 'GitHub', 'Linux', 'Shell'],
  },
]

export const currentlyUsing = [
  'Python',
  'SQL',
  'Pandas',
  'MySQL',
  'REST APIs',
  'PySpark',
  'Databricks',
  'Delta Lake',
  'Unity Catalog',
  'ETL',
  'Data Modeling',
  'Data Visualization',
  'Git',
  'GitHub',
]

export const currentlyLearning = [
  'Cloud data platforms',
  'Advanced Spark / Databricks patterns',
  'Data modeling for analytics',
  'Production ETL / ELT design',
]
