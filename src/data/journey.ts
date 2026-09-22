export type JourneyItem = {
  title: string
  detail: string
}

/**
 * Learning path toward Data Engineering.
 * Edit this list to reflect your actual progression.
 * This is a study journey, not a work history.
 */
export const journeyItems: JourneyItem[] = [
  {
    title: 'SQL',
    detail: 'Querying, filtering, joins, and aggregations for analysis.',
  },
  {
    title: 'Python',
    detail: 'Scripting, data handling, and pipeline-oriented programming.',
  },
  {
    title: 'Pandas',
    detail: 'Cleaning, transforming, and shaping tabular datasets.',
  },
  {
    title: 'APIs',
    detail: 'Fetching and working with JSON from REST sources.',
  },
  {
    title: 'MySQL',
    detail: 'Storing processed data and writing SQL for analysis.',
  },
  {
    title: 'ETL / ELT',
    detail: 'Extract, transform, and load patterns for structured pipelines.',
  },
  {
    title: 'Apache Spark / PySpark',
    detail: 'Distributed processing, schemas, and transformations.',
  },
  {
    title: 'Databricks',
    detail: 'Notebooks, Spark jobs, and lakehouse-style workflows.',
  },
  {
    title: 'Cloud / Advanced Data Engineering',
    detail: 'Continuing study of cloud services and production pipeline design.',
  },
]
