import { AvatarProps } from "@mui/material";
import { AvatarContainer } from "./Avatar.styles";


const Avatar = ({src,alt}:AvatarProps) => {
  return (
    <AvatarContainer>
      <img src={src} alt={alt} />
    </AvatarContainer>
  );
};

export default Avatar;
