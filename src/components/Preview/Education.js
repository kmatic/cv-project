import React from "react";
import styled from 'styled-components';

class Education extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { education } = this.props;

        return (
          <Div>
            <h1>EDUCATION</h1>
                <EducationWrapper>
                  {education.map((educationItem) => {
                      return (
                      <EducationItemWrapper>
                          <p>{educationItem.university}</p>
                          <p>
                            {educationItem.program} | {educationItem.start} &#8211; {educationItem.end}
                          </p>
                      </EducationItemWrapper>
                      )
                  })}
                </EducationWrapper>
          </Div>  
        );
    }
}

const Div = styled.div`
    > h1 {
        font-size: 1.2rem;
        margin-top: 20px;
    }
`;

const EducationItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    > p {
      margin: 0;
    }

    p:first-child {
      font-weight: bold;
    }
`;

const EducationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export default Education