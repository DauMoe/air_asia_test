import './index.scss';

const CardAvatar = ({
  userId,
  imageUrl,
  status,
  name,
  description,
  skypeLink,
  linkedinLink,
  ...props
}) => {
  return (
    <div className="card-avatar-wrapper">
      <img width={50} height={50} src={imageUrl} className="card-avatar-image"/>
    </div>
  )
}

export default CardAvatar;