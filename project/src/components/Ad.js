/** import React, { useState, useEffect } from 'react';

export default function Ad() {

        const { currentPath } = props

        useEffect(() => {
            window.adsbygoogle = window.adsbygoogle || []
            window.adsbygoogle.push({})
        }, [currentPath])


    
    return (
        <div key={currentPath}>
            <ins className="adsbygoogle"
                style={{display: "block", textAlign: "center"}}
                data-ad-layout="in-article"
                data-ad-format="fluid"
                data-adtest="on"
                data-ad-client="ca-pub-2476150477980411"
                data-ad-slot="2975221930">
            </ins>
        </div>
    )
} */

import React from 'react';
import PropTypes from 'prop-types';

const initAd = () => {
  (window.adsbygoogle = window.adsbygoogle || []).push({});
};

class Adsense extends React.Component {
  componentDidMount() {
    initAd();
  }

  shouldComponentUpdate(nextProps) {
    const { props: { path } } = this;
    return nextProps.path !== path;
  }

  componentDidUpdate() {
    initAd();
  }

  render() {
    const { children, className, path } = this.props;
    return (
      <div key={path} className={`adsense ${className}`}>
        <ins
            className="adsbygoogle"
            style={{display: "block", textAlign: "center"}}
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-adtest="on"
            data-ad-client="ca-pub-2476150477980411"
            data-ad-slot="2975221930"
        />
      </div>
    );
  }
}

Adsense.propTypes = {
  path: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Adsense.defaultProps = {
  className: '',
};

export default Adsense;
