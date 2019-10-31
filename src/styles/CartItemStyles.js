import styled from "styled-components";

export const CartListItem = styled.li`
    list-style: none;
    background-color: rgba(255, 228, 151, 0.6);
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 0.4rem 0.6rem rgba(0, 0, 0, .2);

    p {
        font-size: 1.4rem;
    }
`;

export const ItemHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
        font-size: 1.8rem;
    }
`;

export const Instructor = styled.div`
    display: flex;
    align-items: center;

    .instructor--name {
        font-size: 1.6rem;
        margin: 0;
        margin-left: 10px;
    }
`;

export const Section = styled.div`
    display: flex;
    margin-top: 10px;

    .section__details {
        margin-left: 24px;
    }
    .section__location {
        display: flex;
        p {
            margin-left: 0.6rem;
        }
    }
    .section__time {
        display: flex;

        svg {
            padding-left: 4px;
        }
    }
    .times {
        margin-left: 0.8rem;
    }

    &::after {
        content: "";
        display: inline-block;
        height: 0.15rem;
        width: 80%;
        position: absolute;
        top: 23rem;
        left: 3rem;
        background-color: rgba(81, 92, 111, 0.36);
    }
`;

export const Subsection = styled.div`
    display: flex;
    margin-top: 10px;

    .subsection__details {
        margin-left: 24px;
    }
    .subsection__location {
        display: flex;
        p {
            margin-left: 0.6rem;
        }
    }

    .subsection__time {
        display: flex;

        svg {
            display: flex;

            svg {
                padding-left: 4px;
            }
        }
    }
    .times {
        margin-left: 0.8rem;
    }
`;
