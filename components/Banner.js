const Banner = props => {
  return (
    <React.Fragment>
      <div
        className="banner"
        style={{
          backgroundImage: `url(${props.img})`
        }}
      />
      {styles}
    </React.Fragment>
  );
};

const styles = (
  <style jsx>{`
    .banner {
      width: 100%;
      padding-bottom: 25%;
      background-position: 50% 50%;
      background-size: cover;
      background-color: #aaa;
    }
  `}</style>
);

export default Banner;
