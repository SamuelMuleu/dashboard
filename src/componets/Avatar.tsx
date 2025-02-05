import { AvatarContainer } from "./Avatar.styles";

interface AvatarProps {
  src: string;
  alt: string;
}
const Avatar = ({src,alt}:AvatarProps) => {
  return (
    <AvatarContainer>
      <img src={src} alt={alt} />
    </AvatarContainer>
  );
};

export default Avatar;
