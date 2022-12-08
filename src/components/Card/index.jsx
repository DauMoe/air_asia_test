import CardAvatar from './CardAvatar';
import './index.scss';

const Card = ({
  ...props
}) => {
  return (
    <div className='card-wrapper'>
      <CardAvatar
        userId={1}
        imageUrl={"/avatar/gentlement.png"}
      />
    </div>
  )
}

export default Card;