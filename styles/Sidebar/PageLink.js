import styled from "styled-components";

const PageLink = styled.li`
    display: flex;
    align-items: center;
    height: 3rem;
    text-decoration: none;
    list-style: none;
    padding: 0 2rem;
    transition: all 0.3s;
    position: relative;
    z-index: 3;

    div {
        margin-right: 1rem;
        font-size: 22px;
        width: 2rem;
        text-align: center;
        color: #1ac966; /*${(props) => props.color}*/
    }

    div,
    span {
        filter: drop-shadow(0px -1px 0px rgba(0, 0, 0, 0.7));
    }

    &:hover {
        cursor: pointer;
        border: none;
        box-shadow: 0px 5px 0px 0px ${(props) => props.borderColor};
        transform: translateY(-5px);

        /* border-bottom: 5px solid ${(props) => props.borderColor}; */
        background: ${(props) => props.color};

        div,
        span {
            color: ${(props) => props.borderColor};
        }
    }

    @media (max-height: 768px) {
        height: 2.5em;
    }
`;

export default PageLink;
