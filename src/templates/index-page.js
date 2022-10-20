import { graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import Blocksection from "../components/Blocksection";
import Layout from "../components/Layout";

import HeroSection from "../components/HeroSection";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import AboutMe from "../components/AboutMe";
import UnderConstruction from "../components/UnderConstruction";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  herosection,
  aboutme,
  coaching,
  supervision,
  beratung,
  training,
  isCMS
}) => {
  const realPage = () => {
    return (
      <div>
        <Navigation />
        <HeroSection id="home" content={herosection} />
        <AboutMe content={aboutme} />
        <Blocksection
          imgAllignment="left"
          bg="dark"
          id="card1"
          content={coaching}
        />
        <Blocksection
          imgAllignment="right"
          bg="light"
          id="card2"
          content={supervision}
        />
        <Blocksection
          imgAllignment="left"
          bg="dark"
          id="card3"
          content={beratung}
        />
        <Blocksection
          imgAllignment="right"
          bg="light"
          id="card4"
          content={training}
        />
        <Footer />
      </div>
    );
  };

  const underConstruction = () => {
    return (
      <div>
        <UnderConstruction />
      </div>
    );
  };

  console.log(isCMS);
  if (isCMS === undefined || !isCMS) {
    return underConstruction();
  }
  return realPage();
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        herosection={frontmatter.herosection}
        aboutme={frontmatter.aboutme}
        coaching={frontmatter.coaching}
        supervision={frontmatter.supervision}
        beratung={frontmatter.beratung}
        training={frontmatter.training}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        aboutme {
          image
          textlinks
          textrechts
          textunten
        }
        beratung {
          description
          image
          title
          subtitle
        }
        consulting {
          description
          image
          subtitle
          title
        }
        herosection {
          description
          image
          subtitle
          title
        }
        supervision {
          description
          image
          subtitle
          title
        }
        training {
          description
          image
          subtitle
          title
        }
        coaching {
          description
          image
          subtitle
          title
        }
      }
    }
  }
`;
