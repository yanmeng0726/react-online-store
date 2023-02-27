import DirectoryItem from '../directory-item/directory-item.component';
import { DirectoryContainer } from './directory.styles';

const categories = [{
  id:1,
  title:'Spring',
  imageUrl: "https://i.ibb.co/4YqNv57/pexels-ben-mack-6775389.jpg",
  route: 'shop/spring'
},
{
  id:2,
  title:'Summer',
  imageUrl:"https://i.ibb.co/mbYrpzD/pexels-jesse-zheng-732548.jpg",
  route: 'shop/summer'
},
{
  id:3,
  title:'Fall',
  imageUrl:"https://i.ibb.co/xGSPwhc/pexels-digital-buggu-319382.jpg",
  route: 'shop/fall'
},
{
  id:4,
  title:'Winter',
  imageUrl:"https://i.ibb.co/ChP5HPq/pexels-irina-iriser-1122639.jpg",
  route: 'shop/winter'
},
{
  id:5,
  title:'Seasons',
  imageUrl:"https://i.ibb.co/GCsncnR/harli-marten-n7a2-OJDSZns-unsplash.jpg",
  route: 'shop/seasons'
}
]
const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};


export default Directory