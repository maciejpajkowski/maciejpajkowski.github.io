import React from 'react';
import styled from 'styled-components';
import DisplayCase from '../DisplayCase';
import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";

const GET_HOMEPAGE_DATA = gql`
	{
        user(login: "maciejpajkowski") {
            repositories(first: 1, orderBy: { field: UPDATED_AT, direction: DESC }) {
              edges {
                node {
                  id
                  name
                  description
                  openGraphImageUrl
                  url
                  homepageUrl
                  repositoryTopics(first: 10) {
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

const StyledHomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    height: 100%;
`;

const StyledHomePageTopContainer = styled.div`
    display: flex;
    height: 40%;
    padding-right: 1rem;
    flex-direction: column;
    border-bottom: 2px solid #1ac966;
`;

const StyledHomePageBottomContainer = styled.div`
    height: 60%;
    
    h2 {
        text-align: center;
    }
`;

const HomePage = () => {
	const { loading, error, data } = useQuery(GET_HOMEPAGE_DATA);

	if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :C</p>;
    
    console.log(data);

    const projectImage = data.user.repositories.edges[0].node.openGraphImageUrl;
    const projectName = data.user.repositories.edges[0].node.name;
    const projectDescription = data.user.repositories.edges[0].node.description;
    const projectType = data.user.repositories.edges[0].node.repositoryTopics.edges[0].node.topic.name;
    const projectRepoLink = data.user.repositories.edges[0].node.url;
    const projectLiveLink = data.user.repositories.edges[0].node.homepageUrl;

    return (
        <StyledHomePageContainer>
            <StyledHomePageTopContainer>
                <h1>Hello there!</h1>
                <p>Welcome to my personal portfolio website! Here you can find all basic information about my projects. 
                <br />
                Currently, all their data is being downloaded directly from their respective GitHub 
                repositories using GraphQL.</p>
                <p>Feel free to explore all categories available on the left.</p>
            </StyledHomePageTopContainer>
            <StyledHomePageBottomContainer>
                <h2>Last updated project:</h2>
                <DisplayCase 
                    image={projectImage} 
                    title={projectName}
                    description={projectDescription}
                    type={projectType}
                    repoLink={projectRepoLink}
                    liveLink={projectLiveLink}
                />
            </StyledHomePageBottomContainer>
        </StyledHomePageContainer>
    )
}

export default HomePage;