export type Project = {
  id: string
  name: string
  description: string
  problem: string
  built: string[]
  concepts: string[]
  technologies: string[]
  flow: string[]
  githubUrl: string
  demoUrl?: string
  /**
   * Optional image path under /public, e.g. "/projects/api-mysql.png"
   */
  imageSrc?: string
  imageAlt?: string
}

/**
 * Project showcase data.
 */
export const projects: Project[] = [
  {
    id: 'ecommerce-etl-pipeline',
    name: 'E-Commerce ETL Pipeline',
    description:
      'End-to-end ETL pipeline that extracts e-commerce sales data from CSV, cleans and validates it with Python and Pandas, loads it into MySQL, and performs business analysis with SQL.',
    problem:
      'Raw e-commerce data contained missing values, duplicates, inconsistent formats, invalid values, and mixed data types that required cleaning and validation before analysis.',
    built: [
      'CSV data ingestion and preprocessing',
      'Data cleaning, validation, and duplicate handling with Pandas',
      'Missing-value, data-type, and format standardization',
      'Calculated Total Amount and transformed business fields',
      'Loaded 12,000 cleaned records into MySQL using executemany()',
      'Business analytics using SQL and window functions',
    ],
    concepts: [
      'ETL',
      'Data Ingestion',
      'Data Cleaning',
      'Data Validation',
      'Data Transformation',
      'SQL Analytics',
      'Relational Databases',
      'Window Functions',
    ],
    technologies: [
      'Python',
      'Pandas',
      'MySQL',
      'SQL',
      'Jupyter Notebook',
      'Git',
      'GitHub',
    ],
    flow: [
      'CSV',
      'Python',
      'Pandas',
      'Cleaning',
      'Transformation',
      'MySQL',
      'SQL Analysis',
    ],
    githubUrl:
      'https://github.com/Mohammadkaif1809/Data-engineering-projects/tree/main/ecommerce-etl-pipeline',
  },

  {
    id: 'api-pandas-mysql',
    name: 'API → Pandas → MySQL Pipeline',
    description:
      'End-to-end pipeline that extracts JSON data from a REST API, processes and normalizes it with Python and Pandas, and loads the structured data into MySQL for SQL analysis.',
    problem:
      'Raw API responses can contain nested or inconsistent JSON structures that need to be normalized, cleaned, and transformed before relational storage.',
    built: [
      'REST API and JSON data ingestion',
      'JSON normalization into structured tabular data',
      'Data cleaning and transformation with Pandas',
      'Processed data loaded into MySQL',
      'SQL queries for data analysis',
      'Project documentation and GitHub version control',
    ],
    concepts: [
      'ETL',
      'API Ingestion',
      'REST APIs',
      'JSON',
      'Data Normalization',
      'Data Cleaning',
      'Data Transformation',
      'SQL Analysis',
    ],
    technologies: [
      'Python',
      'Pandas',
      'REST API',
      'JSON',
      'MySQL',
      'SQL',
      'Git',
      'GitHub',
    ],
    flow: [
      'REST API',
      'JSON',
      'Python',
      'Pandas',
      'Normalization',
      'MySQL',
      'SQL Analysis',
    ],
    githubUrl:
      'https://github.com/Mohammadkaif1809/Data-engineering-projects/tree/main/ecommerce-api-pipeline',
  },

  {
    id: 'ecommerce-databricks-pipeline',
    name: 'E-Commerce Databricks ETL Pipeline',
    description:
      'End-to-end data engineering pipeline built with Databricks and PySpark using Medallion Architecture, Delta Lake, and Unity Catalog to transform e-commerce data for analytics.',
    problem:
      'Raw e-commerce data required structured ingestion, cleaning, validation, transformation, and modeling before it could be reliably used for analytics and reporting.',
    built: [
      'Data ingestion and transformation using PySpark',
      'Bronze, Silver, and Gold layers with Medallion Architecture',
      'Data cleaning, validation, and transformation',
      'Delta Lake tables managed through Unity Catalog',
      'Dimensional and fact-based Gold data models',
      'Analytical SQL views and denormalized tables for dashboards',
    ],
    concepts: [
      'ETL',
      'PySpark',
      'Medallion Architecture',
      'Data Transformation',
      'Data Modeling',
      'Delta Lake',
      'Unity Catalog',
      'SQL Analytics',
    ],
    technologies: [
      'Databricks',
      'PySpark',
      'Python',
      'SQL',
      'Delta Lake',
      'Unity Catalog',
      'Git',
      'GitHub',
    ],
    flow: [
      'Raw Data',
      'Bronze',
      'Silver',
      'Gold',
      'Data Modeling',
      'SQL Analysis',
    ],
    githubUrl:
      'https://github.com/Mohammadkaif1809/Data-engineering-projects/tree/main/ecommerce-databricks-pipeline',
  },
]