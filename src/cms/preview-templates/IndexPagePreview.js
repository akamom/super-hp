import React from "react";
import PropTypes from "prop-types";
import { IndexPageTemplate } from "../../templates/index-page";

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  console.log(data)

  if (data) {
    return (
      <IndexPageTemplate
        herosection={data.herosection}
        aboutme={data.aboutme}
        coaching={data.coaching}
        supervision={data.supervision}
        beratung={data.beratung}
        training={data.training}
        isCMS={true}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default IndexPagePreview;
