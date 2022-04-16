const SocialNetwork = ({ url, imgFontAw, socNetName }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      {imgFontAw} {socNetName}
    </a>
  );
};

export default SocialNetwork;
