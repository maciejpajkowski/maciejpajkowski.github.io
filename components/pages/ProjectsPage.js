import React from "react";
import ProjectsList from "../ProjectsList";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Container from "../../styles/pages/ProjectsPage/Container";
// import testData from '../../tests/testData';

const GET_PROJECTS_DATA = gql`
    {
        user(login: "maciejpajkowski") {
            repositories(first: 50, privacy: PUBLIC, orderBy: { field: UPDATED_AT, direction: DESC }) {
                edges {
                    node {
                        id
                        name
                        description
                        openGraphImageUrl
                        url
                        homepageUrl
                        repositoryTopics(first: 1) {
                            edges {
                                node {
                                    topic {
                                        name
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

const ProjectsPage = ({ tech }) => {
    const { loading, error, data } = useQuery(GET_PROJECTS_DATA);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :C</p>;

    const getProjects = (techType) => {
        let projectsList = data.user.repositories.edges.filter((item) => {
            return item.node.repositoryTopics.edges[0].node.topic.name === techType;
        });

        // let projectsList = testData.user.repositories.edges.filter((item) => {
        //     return item.node.repositoryTopics.edges[0].node.topic.name === techType;
        // });

        return projectsList;
    };

    return (
        <Container>
            <ProjectsList data={getProjects(tech)} />
        </Container>
    );
};

export default ProjectsPage;
