import { gql } from "@apollo/client";

export const ALL_PROJECTS_QUERY = gql`
  query allProjects {
    projects {
      id
      title
      description
      status
      image_url
      user {
        first_name
        last_name
      }
      target
      collected
  
    }
  }
`;