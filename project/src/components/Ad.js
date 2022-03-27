
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
            data-ad-format={this.props.format}
            data-ad-client="ca-pub-2476150477980411"
            data-ad-slot={path}
            data-full-width-responsive="true"
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
